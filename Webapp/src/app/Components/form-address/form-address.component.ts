import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {ICountry} from '../../interfaces/icountry';
import {ICity} from '../../interfaces/icity';
import {APIService} from '../../Services/api.service';
import {IMembre} from '../../Interfaces/imembre';

@Component({
  selector: 'app-form-address',
  templateUrl: './form-address.component.html',
  styleUrls: ['./form-address.component.css']
})
export class FormAddressComponent implements OnInit {

  @Output() AddressChanged = new EventEmitter<IMembre>();

  localAddress: IMembre = {
    Home_street: '',
    Home_num: '',
    Home_box: '',
    Home_city_id: 0,
    Home_City_Name : '',
    Home_City_Zip: '',
    Home_Country_id: 0,
    Home_Country_Name: '',
    Email: undefined,
    Firstname: undefined,
    Id: undefined,
    Lastname: undefined,
    Password: undefined,
    Phone: undefined,
    Role: undefined,
    Username: undefined,
  };

  countries$: Observable<ICountry[]>;
  cities$: Observable<ICity[]>;

  selectedCountryId = '0';
  selectedCityId = 0;
  selectedZip = '';

  constructor(private dataService: APIService) {
  }

  ngOnInit() {
    this.countries$ = this.dataService.getCountries();
  }

  onCountryChanged($event: ICountry) {
    this.cities$ = this.dataService.getCities(this.selectedCountryId);
    this.localAddress.Home_Country_Name = $event.Name;
    this.localAddress.Home_Country_id = $event.Id;
    this.dataChanged();
  }

  OnCityChanged(event: ICity) {
    this.selectedZip = event.Zip;
    this.localAddress.Home_city_id = event.Id;
    this.localAddress.Home_City_Name = event.Name;
    this.localAddress.Home_city_id = event.Id;
    this.dataChanged();
  }

  onZipChanged($event: ICity) {
    this.selectedCityId = $event.Id;
    this.localAddress.Home_city_id = $event.Id;
    this.localAddress.Home_City_Name = $event.Name;
    this.localAddress.Home_city_id = $event.Id;
    this.dataChanged();
  }

  dataChanged(){
    this.AddressChanged.emit(this.localAddress);
  }

}
