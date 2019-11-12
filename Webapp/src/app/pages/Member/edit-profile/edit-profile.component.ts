import { Component, OnInit } from '@angular/core';
import {Auth_Types, AuthService} from '../../../Services/auth.service';
import {APIService} from '../../../Services/api.service';
import {IMembre} from '../../../Interfaces/imembre';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor( private auth: AuthService, private api: APIService) { }

  ngOnInit() {
    this.auth.checkAuthorizations(Auth_Types.MEMBER_ONLY);
  }

  upadateMember($event: IMembre) {
    this.api.updateMembre($event);
  }
}
