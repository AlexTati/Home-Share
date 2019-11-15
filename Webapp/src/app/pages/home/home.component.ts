import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ICountry} from '../../Interfaces/Icountry';
import {APIService} from '../../Services/api.service';
import {IHouseType} from '../../Interfaces/ihouse-type';
import {Auth_Types, AuthService} from '../../Services/auth.service';
import {IHouse} from '../../Interfaces/ihouse';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public houses: IHouse[];

  constructor(private dataService: APIService, private auth: AuthService) {
  }

  ngOnInit() {
    this.auth.checkAuthorizations(Auth_Types.PUBLIC);
  }

  showResult($event: IHouse[]) {
this.houses = $event;
  }
}
