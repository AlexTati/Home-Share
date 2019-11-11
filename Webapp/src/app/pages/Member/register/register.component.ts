import {Component, OnInit} from '@angular/core';
import {APIService} from '../../../Services/api.service';
import {IMembre} from '../../../Interfaces/imembre';
import {Iadress} from '../../../Interfaces/iadress';
import {Auth_Types, AuthService} from '../../../Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private srv: APIService, private auth: AuthService) {
  }

  ngOnInit() {
  }

  createMember($event: IMembre) {
    this.srv.registerMembre($event).subscribe(
      data => {
        console.log('ok');
      },
      error => {
        console.log('nok');
      });
  }
}
