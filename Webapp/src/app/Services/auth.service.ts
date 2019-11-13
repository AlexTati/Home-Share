import {Injectable} from '@angular/core';
import {IMembre} from '../Interfaces/imembre';
import {NavigationExtras, Router} from '@angular/router';
import {AuthService as OauthService} from 'angularx-social-login';
import {SocialUser} from 'angularx-social-login';
import {FacebookLoginProvider, GoogleLoginProvider} from 'angularx-social-login';
import {APIService} from './api.service';

/**
 *  TODO ne pas save user google avant d avoir rempli le profil
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged = false;
  public localUser: IMembre;
  public socialUser: SocialUser;
  public userType: Account_Types;

  constructor(private router: Router, private oauthService: OauthService, private api: APIService) {
    this.oauthService.authState.subscribe((user) => {
      if (user != null) {
        this.api.oauthLogin(user.email, Account_Types.google).subscribe(
          data => {
            if (data == false) {
              console.log('register');
              const navigationExtras: NavigationExtras = {
                state: {
                  email: user.email,
                  accountType: Account_Types.google
                }
              };
              this.router.navigate(['member/register-social'], navigationExtras)
              console.log('register');
            } else {
              this.setCurrentUser(data, user, Account_Types.google, false);
            }
          },
          error => {
            console.log(error.error);
            this.doLogout();
          }
        );
      }
    });
  }

  signInWithGoogle(): void {
    this.oauthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithLocal(email, password, rememberMe): void {
    const fd = new FormData();
    fd.append('email', email);
    fd.append('password', password);

    this.api.login(fd).subscribe(
      data => {
        this.setCurrentUser(data, undefined, Account_Types.local, rememberMe);
        this.router.navigateByUrl('/home');
      },
      error => {
        console.log(error);
      }
    );
  }

  setCurrentUser(user: IMembre, socialUser: SocialUser, accountType: Account_Types, rememberMe: boolean) {
    this.localUser = user;
    this.socialUser = socialUser;
    this.userType = accountType;
    this.isLogged = true;

    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('rememberMe', rememberMe === true ? 'true' : 'false');
    localStorage.setItem('currentUser', JSON.stringify(user));
    localStorage.setItem('loginDate', Date());
  }

  doLogout() {
    this.oauthService.signOut();
    this.localUser = undefined;
    this.isLogged = false;
    this.socialUser = undefined;
    localStorage.clear();
  }

  checkIfLoggedIn() {
    if (!this.isLogged && localStorage.getItem('loggedIn')) {
      if (localStorage.getItem('rememberMe') === 'false') {
        const loginTime = Date.parse(localStorage.getItem('loginDate'));
        const now = Date.now();
        const minutes = Math.abs(Math.round(((loginTime - now) / 1000) / 60));
        if (minutes > 120) {
          this.doLogout();
        }
      }
      this.isLogged = true;
      this.localUser = JSON.parse(localStorage.getItem('currentUser'));
    }
  }

  checkAuthorizations(authorizationType: Auth_Types) {
    localStorage.setItem('loginDate', Date());
    switch (authorizationType) {
      case Auth_Types.ANONYMOUS_ONLY:
        if (this.isLogged) {
          this.router.navigate(['/member/zone']);
        }
        break;

      case Auth_Types.MEMBER_ONLY:
        if (!this.isLogged) {
          this.router.navigate(['/member/connexion']);
        }
        break;
    }
  }
}

export enum Auth_Types {
  MEMBER_ONLY = 1,
  ANONYMOUS_ONLY,
  PUBLIC,
}

export enum Account_Types {
  local,
  google,
  facebook
}
