import {Component, OnInit} from '@angular/core';
import {Auth_Types, AuthService} from '../../../Services/auth.service';
import {Router} from '@angular/router';

// @ts-ignore
@Component({
  selector: 'app-add-house',
  templateUrl: './add-house.component.html',
  styleUrls: ['./add-house.component.css']
})
export class AddHouseComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.auth.checkAuthorizations(Auth_Types.MEMBER_ONLY);
  }

  onHoueCreated() {
    this.router.navigate(['/member/listHouse']);
  }
}
