import {Component, OnInit} from '@angular/core';
import {APIService} from '../../../Services/api.service';
import {AuthService} from '../../../Services/auth.service';
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
    this.auth.needToBeLoggedOff();
  }

  onsubmit() {
    const fd = new FormData();
    fd.append('email', this.login);
    fd.append('password', this.pswd);
    this.srv.login(fd).subscribe(
      data => {
        this.auth.setCurrentUser(data, this.rememberMe);
        this.router.navigateByUrl('/home');
       },
      error => {

      }

    );
  }
}
