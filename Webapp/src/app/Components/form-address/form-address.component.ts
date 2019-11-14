import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {ICountry} from '../../interfaces/icountry';
import {ICity} from '../../interfaces/icity';
import {APIService} from '../../Services/api.service';
import {Iadress} from '../../Interfaces/iadress';
import {Address} from '../../models/address';

@Component({
  selector: 'app-form-address',
  templateUrl: './form-address.component.html',
  styleUrls: ['./form-address.component.css']
})
export class FormAddressComponent implements OnInit {

  @Input() address: Iadress = new Address();
  @Output() change = new EventEmitter<Iadress>();

  countries$: Observable<ICountry[]>;
  cities$: Observable<ICity[]>;

  constructor(private dataService: APIService) {
  }

  ngOnInit() {
    this.countries$ = this.dataService.getCountries();
  }

  onCountryChanged($event: ICountry) {
    this.cities$ = this.dataService.getCities(this.address.Country_id);
    this.address.Country_Name = $event.Name;
    this.address.Country_id = $event.Id;
    this.dataChanged();
  }

  OnCityChanged(event: ICity) {
    this.address.City_id = event.Id;
    this.address.City_Name = event.Name;
    this.address.City_id = event.Id;
    this.dataChanged();
  }

  onZipChanged($event: ICity) {
    this.address.City_id = $event.Id;
    this.address.City_Name = $event.Name;
    this.address.City_id = $event.Id;
    this.dataChanged();
  }

  dataChanged() {
    this.change.emit(this.address);
  }

}
