import {Component, OnInit} from '@angular/core';
import {IHouse} from '../../../Interfaces/ihouse';
import {Iadress} from '../../../Interfaces/iadress';
import {APIService} from '../../../Services/api.service';
import {FileLikeObject} from 'ng2-file-upload';
import {IHouseType} from '../../../Interfaces/ihouse-type';
import {Auth_Types, AuthService} from '../../../Services/auth.service';
import {IOptions} from '../../../Interfaces/ioptions';

// @ts-ignore
@Component({
  selector: 'app-add-house',
  templateUrl: './add-house.component.html',
  styleUrls: ['./add-house.component.css']
})
export class AddHouseComponent implements OnInit {

  selectedFile: FileLikeObject;

  houseType: IHouseType[] = [];

  localHouse: IHouse = {
    Id: null,
    Title: '',
    Short_description: '',
    Long_description: '',
    Nb_guest: null,
    Picture: '',
    Active: 1,
    Deletion_time: null,
    Creation_date: null,
    Insurance_mandatory: 0,
    Street: '',
    Num: '',
    Box: '',
    City_id: null,
    City_Name: '',
    City_Zip: '',
    Country_id: null,
    Country_Name: '',
    Membre_id: this.auth.localUser.Id,
    House_type_id: null,
    House_type_name: '',
    Note: null,
    Options: [],
  };

  constructor(private srv: APIService, private auth: AuthService) {
  }

  ngOnInit() {
    this.auth.checkAuthorizations(Auth_Types.MEMBER_ONLY);



    this.srv.getHouseType().subscribe(data => {
      this.houseType = data;
    });
  }

  onFormSubmit() {
    this.srv.addHouse(this.localHouse, this.selectedFile).subscribe(data => {
      console.log(data);
    });
  }

  onAddressChanged($event: Iadress) {
    this.localHouse.Street = $event.Street;
    this.localHouse.Num = $event.Num;
    this.localHouse.Box = $event.Box;
    this.localHouse.City_id = $event.City_id;
  }

  OnFileSelected($event: FileLikeObject) {
    this.selectedFile = $event;
  }

  optionsChanged($event: IOptions[]) {
    this.localHouse.Options = $event;
  }

  houseTypeChanged($event: IHouseType) {
    this.localHouse.House_type_id = $event.Id;
  }
}
