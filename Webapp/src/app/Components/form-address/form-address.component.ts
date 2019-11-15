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

  @Input() set address (a: Iadress){
    if (!a) return;

    if (a.Country_id) {
      this.cities$ = this.dataService.getCities(a.Country_id);
      this.localAddress = a;
    }

  }

  @Output() change = new EventEmitter<Iadress>();

  countries$: Observable<ICountry[]>;
  cities$: Observable<ICity[]>;
  localAddress: Iadress;

  constructor(private dataService: APIService) {
  }

  ngOnInit() {
    this.countries$ = this.dataService.getCountries();
    if (!this.localAddress) this.localAddress = new Address()
  }

  onCountryChanged($event: ICountry) {
    this.cities$ = this.dataService.getCities(this.localAddress.Country_id);
    this.localAddress.Country_Name = $event.Name;
    this.localAddress.Country_id = $event.Id;
    this.dataChanged();
  }

  OnCityChanged(event: ICity) {
    this.localAddress.City_id = event.Id;
    this.localAddress.City_Name = event.Name;
    this.localAddress.City_id = event.Id;
    this.dataChanged();
  }

  onZipChanged($event: ICity) {
    this.localAddress.City_id = $event.Id;
    this.localAddress.City_Name = $event.Name;
    this.localAddress.City_id = $event.Id;
    this.dataChanged();
  }

  dataChanged() {
    this.change.emit(this.localAddress);
  }

}
