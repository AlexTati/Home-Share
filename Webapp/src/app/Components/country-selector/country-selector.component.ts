import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {ICountry} from '../../Interfaces/Icountry';
import {APIService} from '../../Services/api.service';

@Component({
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.css']
})
export class CountrySelectorComponent implements OnInit {

  @Output() change = new EventEmitter<ICountry>();

  countries$: Observable<ICountry[]>;

  constructor(private dataService: APIService) { }

  ngOnInit() {
    this.countries$ = this.dataService.getCountries();
  }

  onCountryChanged($event: ICountry) {
    this.change.emit($event);
  }
}
