import { Component, OnInit } from '@angular/core';
import {IMembre} from '../../../Interfaces/imembre';
import {APIService} from '../../../Services/api.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-register-from-social',
  templateUrl: './register-from-social.component.html',
  styleUrls: ['./register-from-social.component.css']
})
export class RegisterFromSocialComponent implements OnInit {

  newMember: IMembre = {
    Email: '',
    Firstname: '',
    Home_box: '',
    Home_city_id: null,
    Home_City_Name: '',
    Home_City_Zip: '',
    Home_Country_id: null,
    Home_Country_Name: '',
    Home_num: '',
    Home_street: '',
    Id: null,
    Lastname: '',
    Password: '',
    Phone: '',
    Role: null,
    Username: '',
    Account_type: 0,
  };

  constructor(private srv: APIService, private route: ActivatedRoute,  private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.newMember.Email = this.router.getCurrentNavigation().extras.state.email;
        this.newMember.Account_type = this.router.getCurrentNavigation().extras.state.accountType;
      }
    });
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
