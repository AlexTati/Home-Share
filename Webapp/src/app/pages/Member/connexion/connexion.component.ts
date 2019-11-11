import {Component, OnInit} from '@angular/core';
import {APIService} from '../../../Services/api.service';
import {Auth_Types, AuthService} from '../../../Services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  login = '';
  pswd = '';
  rememberMe = false;

  constructor(private srv: APIService, private auth: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.auth.checkAuthorizations(Auth_Types.ANONYMOUS_ONLY);
  }

  onsubmit() {
    this.auth.signInWithLocal(this.login, this.pswd, this.rememberMe);
  }

  LoginWithGoogle() {
    this.auth.signInWithGoogle();
  }
}
