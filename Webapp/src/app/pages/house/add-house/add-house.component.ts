import {Component, OnInit} from '@angular/core';
import {Auth_Types, AuthService} from '../../../Services/auth.service';

// @ts-ignore
@Component({
  selector: 'app-add-house',
  templateUrl: './add-house.component.html',
  styleUrls: ['./add-house.component.css']
})
export class AddHouseComponent implements OnInit {

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.checkAuthorizations(Auth_Types.MEMBER_ONLY);
  }

}
