import {Component, OnInit} from '@angular/core';
import {IHouse} from '../../Interfaces/ihouse';
import {House} from '../../models/house';
import {IHouseType} from '../../Interfaces/ihouse-type';
import {ICountry} from '../../Interfaces/Icountry';
import {IOptions} from '../../Interfaces/ioptions';
import {APIService} from '../../Services/api.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  private advanced = false;
  private house: IHouse;

  constructor(private api: APIService) {
  }

  ngOnInit() {
    this.house = new House();
  }

  toggleAdvanced() {
    this.advanced = !this.advanced;
    this.house.Nb_guest = null;
    this.house.options = null;
  }

  availabilitiesChanged($event) {
    this.house.Availabilities = $event;
  }

  houseTypeChanged($event: IHouseType) {
    this.house.House_type_id = $event.Id;
  }

  countryChanged($event: ICountry) {
    this.house.Country_id = $event.Id;
  }

  optionsChanged($event: IOptions[]) {
    this.house.options = $event;
  }

  onSubmit() {
    this.api.searchHouses(this.house).subscribe(data => {
      console.log(data);
    });
  }
}
