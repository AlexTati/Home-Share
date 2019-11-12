import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {ICountry} from '../../interfaces/icountry';
import {ICity} from '../../interfaces/icity';
import {APIService} from '../../Services/api.service';
import {Iadress} from '../../Interfaces/iadress';

@Component({
  selector: 'app-form-address',
  templateUrl: './form-address.component.html',
  styleUrls: ['./form-address.component.css']
})
export class FormAddressComponent implements OnInit {

  @Input() address: Iadress;
  @Output() change = new EventEmitter<Iadress>();

  countries$: Observable<ICountry[]>;
  cities$: Observable<ICity[]>;

  selectedCountryId = 0;
  selectedCityId = 0;
  selectedZip = '';
  localAddress: Iadress = {
    City_Name: '',
    City_Zip: '',
    City_id: 0,
    Country_Name: '',
    Country_id: 0,
    Street: '',
    Num: '',
    Box: ''
  };

  countries$: Observable<ICountry[]>;
  cities$: Observable<ICity[]>;

  selectedCountryId = '0';
  selectedCityId = 0;
  selectedZip = '';
  pays = '';
  rue = '';
  numero = '';
  zip = '';
  ville = '';

  constructor(private dataService: APIService) {
  }

  ngOnInit() {
    this.countries$ = this.dataService.getCountries();
    this.localAddress.Street = this.address.Street;
    this.localAddress.Num = this.address.Num;
    this.localAddress.Box = this.address.Box;
    this.selectedCountryId = this.address.Country_id;
    this.onCountryChanged({Id : this.address.Country_id, Name :this.address.Country_Name});
    this.selectedCityId = this.address.City_id;
    this.selectedZip = this.address.City_Zip;
  }

  onCountryChanged($event: ICountry) {
    this.cities$ = this.dataService.getCities(this.selectedCountryId);
    this.localAddress.Country_Name = $event.Name;
    this.localAddress.Country_id = $event.Id;
    this.dataChanged();
  }

  OnCityChanged(event: ICity) {
    this.selectedZip = event.Zip;
    this.localAddress.City_id = event.Id;
    this.localAddress.City_Name = event.Name;
    this.localAddress.City_id = event.Id;
    this.dataChanged();
  }

  onZipChanged($event: ICity) {
    this.selectedCityId = $event.Id;
    this.localAddress.City_id = $event.Id;
    this.localAddress.City_Name = $event.Name;
    this.localAddress.City_id = $event.Id;
    this.dataChanged();
  }

  dataChanged() {
    this.change.emit(this.localAddress);
  }

}
