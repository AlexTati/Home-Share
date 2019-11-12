import {Component, OnInit} from '@angular/core';
import {APIService} from '../../../Services/api.service';
import {IMembre} from '../../../Interfaces/imembre';
import {Account_Types, Auth_Types, AuthService} from '../../../Services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private srv: APIService, private auth: AuthService, private router : Router) {
  }

  ngOnInit() {
    this.auth.checkAuthorizations(Auth_Types.ANONYMOUS_ONLY);
  }

  createMember($event: IMembre) {
    this.srv.registerMembre($event).subscribe(
      data => {
        this.auth.setCurrentUser(data, undefined, Account_Types.local, true);
        this.router.navigate(['/member/zone']);
      },
      error => {
        console.log('nok');
      });
  }
}
