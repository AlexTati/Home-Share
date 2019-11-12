import { Component, OnInit } from '@angular/core';
import {IHouse} from '../../../Interfaces/ihouse';
import {APIService} from '../../../Services/api.service';
import {log} from 'util';

@Component({
  selector: 'app-echange-house',
  templateUrl: './echange-house.component.html',
  styleUrls: ['./echange-house.component.css']
})
export class EchangeHouseComponent implements OnInit {

  house: IHouse;

  constructor(private API: APIService) { }

  ngOnInit() {
    this.API.getHouse(1).subscribe(data => {
      this.house = data;
    });
  }

}
