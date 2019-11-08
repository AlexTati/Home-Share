import { Component, OnInit } from '@angular/core';
import {APIService} from '../../../Services/api.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  login = "";
  pswd = "";

  constructor(private srv: APIService) { }

  ngOnInit() {
  }

  onsubmit() {
    const fd = new FormData();
    fd.append('email', this.login);
    fd.append('password', this.pswd);
    this.srv.login(fd).subscribe(data => {
      if(data.status == 'success'){
        console.log('ok');
      } else {
        console.log('not ok');
      }
    });
  }
}
