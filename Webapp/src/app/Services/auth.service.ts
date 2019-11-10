import {Injectable} from '@angular/core';
import {IMembre} from '../Interfaces/imembre';
import {Router} from '@angular/router';
import {log} from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged: boolean = false;
  public currentUser: IMembre = undefined;


  constructor(private router: Router) {
  }

  setCurrentUser(user: IMembre, rememberMe: boolean) {
    this.currentUser = user;
    this.isLogged = true;

    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('rememberMe', rememberMe === true ? 'true' : 'false');
    localStorage.setItem('currentUser', JSON.stringify(user));
    localStorage.setItem('loginDate', Date());
  }

  doLogout() {
    this.currentUser = undefined;
    this.isLogged = false;
    localStorage.clear();
  }

  checkIfLoggedIn(): boolean {

    if (localStorage.getItem('loggedIn')) {
      if (localStorage.getItem('rememberMe') === 'false') {
        let loginTime = Date.parse(localStorage.getItem('loginDate'));
        let now = Date.now();
        let minutes = Math.abs(Math.round(((loginTime - now) / 1000) / 60));
        if (minutes > 10) {
          this.doLogout();
        }
      }

      this.isLogged = true;
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      return true;
    }

    return false;
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
