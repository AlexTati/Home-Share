import { Component, OnInit } from '@angular/core';
import {IHouse} from '../../../Interfaces/ihouse';
import {Iadress} from '../../../Interfaces/iadress';
import {APIService} from '../../../Services/api.service';
import {FileLikeObject} from "ng2-file-upload";
import {IHouseType} from "../../../Interfaces/ihouse-type";

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
    Active: null,
    Deletion_time: null,
    Creation_date: null,
    Insurance_mandatory: null,
    Street: '',
    Num: '',
    Box: '',
    City_id: null,
    City_Name: '',
    City_Zip: '',
    Country_id: null,
    Country_Name: '',
    Membre_id: null,
    House_type_id: null,
    House_type_name: '',
    Note: null,
  };

  constructor(private srv: APIService) { }

  ngOnInit() {
    this.srv.getHouseType().subscribe(data => {
      this.houseType = data;
    });
  }

  onFormSubmit() {

    const fd = new FormData();

    if (this.localHouse.Id) { fd.append('Id', this.localHouse.Id.toString()); }
    if (this.localHouse.Nb_guest) { fd.append('Nb_guest', this.localHouse.Nb_guest.toString()); }
    if (this.localHouse.Active) { fd.append('Active', this.localHouse.Active.toString()); }
    if (this.localHouse.Deletion_time) { fd.append('Deletion_time', this.localHouse.Deletion_time.toString()); }
    if (this.localHouse.Creation_date) { fd.append('Creation_date', this.localHouse.Creation_date.toString()); }
    if (this.localHouse.Insurance_mandatory) { fd.append('Insurance_mandatory', this.localHouse.Insurance_mandatory.toString()); }
    if (this.localHouse.City_id) { fd.append('City_id', this.localHouse.City_id.toString()); }
    if (this.localHouse.Country_id) { fd.append('Country_id', this.localHouse.Country_id.toString()); }
    if (this.localHouse.Membre_id) { fd.append('Membre_id', this.localHouse.Membre_id.toString()); }
    if (this.localHouse.House_type_id) { fd.append('House_type_id', this.localHouse.House_type_id.toString()); }
    if (this.localHouse.Note) { fd.append('Note', this.localHouse.Note.toString()); }
    if (this.selectedFile) {
      fd.append('picture', this.selectedFile.rawFile, this.selectedFile.name);
    }

    fd.append('Title', this.localHouse.Title);
    fd.append('Short_description', this.localHouse.Short_description);
    fd.append('Long_description', this.localHouse.Long_description);
    fd.append('Picture', this.localHouse.Picture);
    fd.append('Street', this.localHouse.Street);
    fd.append('Num', this.localHouse.Num);
    fd.append('Box', this.localHouse.Box);
    fd.append('City_Name', this.localHouse.City_Name);
    fd.append('City_Zip', this.localHouse.City_Zip);
    fd.append('Country_Name', this.localHouse.Country_Name);
    fd.append('House_type_name', this.localHouse.House_type_name);

  }

  onAddressChanged($event: Iadress) {

  }

  OnFileSelected($event: FileLikeObject) {
    this.selectedFile = $event;
  }
}
