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

  constructor(private srv: APIService, private auth: AuthService) {
  }

  ngOnInit() {
    this.auth.checkAuthorizations(Auth_Types.ANONYMOUS_ONLY);
  }

  onFormSubmit() {

    let fd = new FormData();

    if (this.localMembre.Home_city_id) {
      fd.append('Home_city_id', this.localMembre.Home_city_id.toString());
    }
    if (this.localMembre.Home_Country_id) {
      fd.append('Home_Country_id', this.localMembre.Home_Country_id.toString());
    }
    if (this.localMembre.Id) {
      fd.append('Id', this.localMembre.Id.toString());
    }
    if (this.localMembre.Role) {
      fd.append('Role', this.localMembre.Role.toString());
    }

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


  onAddressChanged($event: Iadress) {
    this.localMembre.Home_street = $event.Street;
    this.localMembre.Home_num = $event.Num;
    this.localMembre.Home_box = $event.Box;
    this.localMembre.Home_Country_Name = $event.Country_Name;
    this.localMembre.Home_Country_id = $event.Country_id;
    this.localMembre.Home_City_Name = $event.City_Name;
    this.localMembre.Home_City_Zip = $event.City_Zip;
    this.localMembre.Home_city_id = $event.City_id;
  }
}
