import {Component, OnInit} from '@angular/core';
import {APIService} from '../../../Services/api.service';
import {IMembre} from '../../../Interfaces/imembre';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  localMembre: IMembre = {
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
  };

  constructor(private srv: APIService) {
  }

  ngOnInit() {
  }

  onFormSubmit() {

    let fd = new FormData();

    if (this.localMembre.Home_city_id) fd.append('Home_city_id', this.localMembre.Home_city_id.toString());
    if (this.localMembre.Home_Country_id) fd.append('Home_Country_id', this.localMembre.Home_Country_id.toString());
    if (this.localMembre.Id) fd.append('Id', this.localMembre.Id.toString());
    if (this.localMembre.Role) fd.append('Role', this.localMembre.Role.toString());

    fd.append('Email', this.localMembre.Email);
    fd.append('Firstname', this.localMembre.Firstname);
    fd.append('Home_box', this.localMembre.Home_box);
    fd.append('Home_City_Name', this.localMembre.Home_City_Name);
    fd.append('Home_City_Zip', this.localMembre.Home_City_Zip);
    fd.append('Home_Country_Name', this.localMembre.Home_Country_Name);
    fd.append('Home_num', this.localMembre.Home_num);
    fd.append('Home_street', this.localMembre.Home_street);
    fd.append('Lastname', this.localMembre.Lastname);
    fd.append('Password', this.localMembre.Password);
    fd.append('Phone', this.localMembre.Phone);
    fd.append('Username', this.localMembre.Username);

    this.srv.registerMembre(fd).subscribe(data => {
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
