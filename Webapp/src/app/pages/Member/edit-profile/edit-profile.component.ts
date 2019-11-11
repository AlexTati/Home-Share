import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../Services/auth.service';
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
  }

  upadateMember($event: IMembre) {
    this.api.updateMembre($event);
  }
}
