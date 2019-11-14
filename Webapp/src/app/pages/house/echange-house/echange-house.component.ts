import {Component, Input, OnInit} from '@angular/core';
import {IHouse} from '../../../Interfaces/ihouse';
import {APIService} from '../../../Services/api.service';
import {log} from 'util';
import {IMembre} from '../../../Interfaces/imembre';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {House} from '../../../models/house';
import {Booking} from '../../../models/booking';
import {AuthService} from '../../../Services/auth.service';

@Component({
  selector: 'app-echange-house',
  templateUrl: './echange-house.component.html',
  styleUrls: ['./echange-house.component.css']
})
export class EchangeHouseComponent implements OnInit {

  // @ts-ignore
  @Input() HouseId: number;
  house: IHouse;

  constructor(private API: APIService, private route: ActivatedRoute, private auth: AuthService) {
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

  createBooking() {
    const b = new Booking();
    b.DateFin = new Date();
    b.DateDebut = new Date();
    b.House_id = this.house.Id;
    b.Membre_id = this.auth.localUser.Id;
    b.Insurance = 0;

    this.API.createBooking(b).subscribe(data => {
      console.log(data);
    });
  }
}
