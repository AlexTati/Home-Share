import {Injectable} from '@angular/core';
import {IMembre} from '../Interfaces/imembre';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged: boolean = false;
  public currentUser: IMembre = undefined;

  constructor() {
  }

  setCurrentUser(user: IMembre, rememberMe: boolean) {
    this.currentUser = user;
    this.isLogged = true;

    if (rememberMe) {
      localStorage.setItem('rememberMe', 'true');
      localStorage.setItem('currentUser', JSON.stringify(user));
    }
  }

  doLogout() {
    this.currentUser = undefined;
    this.isLogged = false;

    localStorage.clear();
  }

  isRemembered(): boolean {
    if (localStorage.getItem('rememberMe')) {
      this.isLogged = true;
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      return true;
    }

    return false;
  }
}
