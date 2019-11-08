import { Component, OnInit } from '@angular/core';
import {IHousesResponse} from '../../../Interfaces/ihouses-response';
import {APIService} from '../../../Services/api.service';
import {IHouse} from '../../../Interfaces/ihouse';

@Component({
  selector: 'app-list-house',
  templateUrl: './list-house.component.html',
  styleUrls: ['./list-house.component.css']
})
export class ListHouseComponent implements OnInit {

  houseListe: IHouse[] = [];
  constructor(private dataService: APIService) { }

  ngOnInit() {
    this.dataService.getAllHouses().subscribe(data => {

      this.houseListe = data.data;
    });
  }

}
