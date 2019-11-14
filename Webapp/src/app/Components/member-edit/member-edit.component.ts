import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Iadress} from '../../Interfaces/iadress';
import {IMembre} from '../../Interfaces/imembre';
import {Location} from '@angular/common';
import {Account_Types} from '../../Services/auth.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {

  @Output() createMember = new EventEmitter<IMembre>();
  @Output() updateMember = new EventEmitter<IMembre>();
  @Input() membre: IMembre;

  private editMode = false;
  private passwordConfirm = '';

  constructor(private _location: Location) {

  }

  ngOnInit() {
    if (this.membre === undefined) {
      this.membre = {
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
    } else {
      this.editMode = true;
    }
    console.log(this.membre);
  }

  onAddressChanged($event: Iadress) {
    this.membre.Home_street = $event.Street;
    this.membre.Home_num = $event.Num;
    this.membre.Home_box = $event.Box;
    this.membre.Home_Country_Name = $event.Country_Name;
    this.membre.Home_Country_id = $event.Country_id;
    this.membre.Home_City_Name = $event.City_Name;
    this.membre.Home_City_Zip = $event.City_Zip;
    this.membre.Home_city_id = $event.City_id;
  }

  onFormSubmit() {
    if (this.editMode) {
      this.updateMember.emit(this.membre);
    } else {
      this.createMember.emit(this.membre);
    }
  }


  back() {
    this._location.back();
  }
}
