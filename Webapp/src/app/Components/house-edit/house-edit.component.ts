import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FileLikeObject} from 'ng2-file-upload';
import {IHouseType} from '../../Interfaces/ihouse-type';
import {IHouse} from '../../Interfaces/ihouse';
import {Iadress} from '../../Interfaces/iadress';
import {IOptions} from '../../Interfaces/ioptions';
import {IAvailibility} from '../../Interfaces/iavailibility';
import {APIService} from '../../Services/api.service';
import {AuthService} from '../../Services/auth.service';
import {IMembre} from '../../Interfaces/imembre';
import {GeocodingService} from '../../Services/geocoding.service';
import {House} from '../../models/house';
import {Address} from '../../models/address';

@Component({
  selector: 'app-house-edit',
  templateUrl: './house-edit.component.html',
  styleUrls: ['./house-edit.component.css']
})
export class HouseEditComponent implements OnInit {

  @Input() set house ( h: IHouse){
    if (!h) return;

    this.localHouse = h;
    this.localAddress = {
      Street : this.localHouse.Street,
      Num : this.localHouse.Num,
      Box : this.localHouse.Box,
      City_id : this.localHouse.City_id,
      City_Zip: this.localHouse.City_Zip,
      Country_id: this.localHouse.Country_id,
      Country_Name: this.localHouse.Country_Name,
      City_Name: this.localHouse.City_Name
    };
    this.editMode = true;

  }

  @Output() addHouse = new EventEmitter<IHouse>();
  @Output() updateHouse = new EventEmitter<IHouse>();
  @Output() houseSuccessfullyCreated = new EventEmitter<IHouse>();

  private editMode = false;

  selectedFile: FileLikeObject;
  houseType: IHouseType[] = [];
  localAddress: Iadress = new Address();
  localHouse: IHouse = new House();

  constructor(private srv: APIService, private auth: AuthService, private geo: GeocodingService) {
  }

  ngOnInit() {
    this.srv.getHouseType().subscribe(data => {
      this.houseType = data;
    });
  }

  onFormSubmit() {

    this.geo.getCoordinates({
      Street: this.localHouse.Street,
      Num: this.localHouse.Num,
      City_Zip: this.localHouse.City_Zip,
      City_Name: this.localHouse.City_Name,
      Country_Name: this.localHouse.Country_Name,
      Box: undefined,
      City_id: undefined,
      Country_id: undefined
    }).subscribe(data => {

      if (data && data[0] && data[0].lat) {
        this.localHouse.Lat = data[0].lat;
        this.localHouse.Lng = data[0].lon;
      }

      if (this.localHouse.Id) {
        this.srv.updateHouse(this.localHouse, this.selectedFile).subscribe(data => {
          this.houseSuccessfullyCreated.emit(data);
        });
        } else {
        this.srv.addHouse(this.localHouse, this.selectedFile).subscribe(data => {
          this.houseSuccessfullyCreated.emit(data);
        });
      }
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
    this.localHouse.options = $event;
  }

  houseTypeChanged($event: IHouseType) {
    this.localHouse.House_type_id = $event.Id;
  }

  onAvailabilityChanged($event: IAvailibility[]) {
    this.localHouse.availabilities = $event;
  }
}
