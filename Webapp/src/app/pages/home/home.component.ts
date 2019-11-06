import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ICountry} from '../../Interfaces/Icountry';
import {APIService} from '../../Services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  countries$: Observable<ICountry[]>;

  constructor(private dataService: APIService) { }

  ngOnInit() {
    this.countries$ = this.dataService.getCountries();
  }

}
