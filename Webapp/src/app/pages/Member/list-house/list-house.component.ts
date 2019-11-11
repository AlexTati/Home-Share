import {Component, OnInit} from '@angular/core';
import {APIService} from '../../../Services/api.service';
import {IHouse} from '../../../Interfaces/ihouse';
import {Auth_Types, AuthService} from '../../../Services/auth.service';

@Component({
  selector: 'app-list-house',
  templateUrl: './list-house.component.html',
  styleUrls: ['./list-house.component.css']
})
export class ListHouseComponent implements OnInit {

  houseListe: IHouse[] = [];
  constructor(private dataService: APIService, private auth: AuthService) { }

  ngOnInit() {
    this.auth.checkAuthorizations(Auth_Types.MEMBER_ONLY);

    this.dataService.getHousesForMember(this.auth.localUser.Id).subscribe(data => {
      this.houseListe = data;
    });
  }

}
