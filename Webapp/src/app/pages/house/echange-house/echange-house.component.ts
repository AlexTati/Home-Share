import {Component, Input, OnInit} from '@angular/core';
import {IHouse} from '../../../Interfaces/ihouse';
import {APIService} from '../../../Services/api.service';
import {log} from 'util';
import {IMembre} from '../../../Interfaces/imembre';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {House} from '../../../models/house';

@Component({
  selector: 'app-echange-house',
  templateUrl: './echange-house.component.html',
  styleUrls: ['./echange-house.component.css']
})
export class EchangeHouseComponent implements OnInit {

  // @ts-ignore
  @Input() HouseId: number;
  house: IHouse;

  constructor(private API: APIService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // @ts-ignore

    this.route.paramMap.subscribe(params => {
      // @ts-ignore
      const houseId = (params.params.id);

      this.API.getHouse(houseId).subscribe(data => {
        this.house = data;
      });

      });

  }

}
