import {Component, OnInit} from '@angular/core';
import {Auth_Types, AuthService} from '../../../Services/auth.service';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css']
})
export class ZoneComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.checkAuthorizations(Auth_Types.MEMBER_ONLY);
  }

}
