import { Component, OnInit } from '@angular/core';
import {IBooking} from '../../../Interfaces/ibooking';
import {APIService} from '../../../Services/api.service';
import {AuthService} from '../../../Services/auth.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  public bookings: IBooking[];

  constructor(private API: APIService, private auth: AuthService) { }

  ngOnInit() {
    console.log('booking init');
    this.API.getBookingsForMember(this.auth.localUser.Id).subscribe( data => {
      this.bookings = data;
    });
  }

  refreshContent() {
    this.ngOnInit();
  }
}
