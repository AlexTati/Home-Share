import { Component, OnInit } from '@angular/core';
import {APIService} from '../../../Services/api.service';
import {IMembre} from "../../../Interfaces/imembre";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  localMembre : IMembre = {
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
  }

  constructor(private srv: APIService) { }

  ngOnInit() {
  }

  onFormSubmit(){
    this.srv.registerMembre(this.localMembre).subscribe(data => {
      console.log('ok');
    });
  }

  onAddressChanged($event: IMembre) {
    this.localMembre.Home_street = $event.Home_street;
    this.localMembre.Home_num = $event.Home_num;
    this.localMembre.Home_box = $event.Home_box;
    this.localMembre.Home_Country_Name = $event.Home_Country_Name;
    this.localMembre.Home_Country_id = $event.Home_Country_id;
    this.localMembre.Home_City_Name = $event.Home_City_Name;
    this.localMembre.Home_City_Zip = $event.Home_City_Zip;
    this.localMembre.Home_city_id = $event.Home_city_id;
  }
}
