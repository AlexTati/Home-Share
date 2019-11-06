import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ICountry} from '../../interfaces/icountry';
import {NgSelectComponent} from '@ng-select/ng-select';
import {ICity} from '../../interfaces/icity';
import {APIService} from '../../Services/api.service';

@Component({
  selector: 'app-form-address',
  templateUrl: './form-address.component.html',
  styleUrls: ['./form-address.component.css']
})
export class FormAddressComponent implements OnInit {

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

  updateCities($event: Event) {
    this.cities$ = this.dataService.getCities(this.selectedCountryId);
  }

  updateZip(event: ICity) {
    this.selectedZip = event.Zip;
  }

  updateCityFromZip($event: ICity) {
    this.selectedCityId = $event.Id;
  }

}
