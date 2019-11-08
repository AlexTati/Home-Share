import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ICountry} from '../../Interfaces/Icountry';
import {APIService} from '../../Services/api.service';
import {IHouseType} from '../../Interfaces/ihouse-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  houseType: IHouseType[] = [];
  countries$: Observable<ICountry[]>;
  showadvancesearch: boolean = false;

  constructor(private dataService: APIService) { }

  ngOnInit() {
    this.countries$ = this.dataService.getCountries();
    this.dataService.getHouseType().subscribe(data => {
      this.houseType = data;
    });
  }

  toggleAdvanceSearch() {
    this.showadvancesearch = !this.showadvancesearch;
  }
}
