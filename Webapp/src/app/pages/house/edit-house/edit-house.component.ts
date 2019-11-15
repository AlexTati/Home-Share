import {Component, OnInit} from '@angular/core';
import {APIService} from '../../../Services/api.service';
import {FileLikeObject} from 'ng2-file-upload';
import {IOptions} from '../../../Interfaces/ioptions';
import {IHouseType} from '../../../Interfaces/ihouse-type';
import {ICountry} from '../../../Interfaces/Icountry';
import {Auth_Types, AuthService} from '../../../Services/auth.service';
import {IHouse} from '../../../Interfaces/ihouse';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-house',
  templateUrl: './edit-house.component.html',
  styleUrls: ['./edit-house.component.css']
})
export class EditHouseComponent implements OnInit {

  localHouse: IHouse;

  constructor(private api: APIService, private auth: AuthService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.auth.checkAuthorizations(Auth_Types.PUBLIC);

    this.route.paramMap.subscribe(data => {
      // @ts-ignore
      const houseId = (data.params.id);

      this.api.getHouse(houseId).subscribe(data => {
        this.localHouse = data;
      });
    });

  }


  houseUpdated() {
    this.router.navigate(['/member/listHouse']);
  }

  cancel() {

  }
}
