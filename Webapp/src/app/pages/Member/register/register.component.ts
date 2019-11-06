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
    console.log(this.localMembre);
  }
}
