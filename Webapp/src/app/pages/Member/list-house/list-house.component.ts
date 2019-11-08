import { Component, OnInit } from '@angular/core';
import {IHousesResponse} from '../../../Interfaces/ihouses-response';
import {APIService} from '../../../Services/api.service';
import {IHouse} from '../../../Interfaces/ihouse';
import {AuthService} from '../../../Services/auth.service';

@Component({
  selector: 'app-list-house',
  templateUrl: './list-house.component.html',
  styleUrls: ['./list-house.component.css']
})
export class ListHouseComponent implements OnInit {

  houseListe: IHouse[] = [];
  constructor(private dataService: APIService, private auth: AuthService) { }

  ngOnInit() {

    console.log(this.auth.currentUser)
    this.dataService.getHousesForMember(this.auth.currentUser.Id).subscribe(data => {
      this.houseListe = data.data;
    });
  }

}
