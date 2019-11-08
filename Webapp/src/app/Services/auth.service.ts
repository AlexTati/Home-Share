import { Injectable } from '@angular/core';
import {IMembre} from '../Interfaces/imembre';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged: boolean = false;
  public currentUser: IMembre = undefined;

  constructor() { }

  setCurrentUser(user: IMembre){
    this.currentUser = user;
    this.isLogged = true;
  }

  doLogout(){
    this.currentUser = undefined;
    this.isLogged = false;
  }
}
