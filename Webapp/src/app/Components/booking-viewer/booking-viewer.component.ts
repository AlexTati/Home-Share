import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IBooking} from '../../Interfaces/ibooking';
import {APIService} from '../../Services/api.service';
import {IHouse} from '../../Interfaces/ihouse';

@Component({
  selector: 'app-booking-viewer',
  templateUrl: './booking-viewer.component.html',
  styleUrls: ['./booking-viewer.component.css']
})
export class BookingViewerComponent implements OnInit {

  @Input() set booking( b: IBooking) {
    if (!b) { return; }

    this.localBooking = b;

    this.API.getHouse(b.House_id).subscribe( data => {
      this.localHouse = data;
    })
  }

  @Output() bookingAccepted = new EventEmitter();

  localBooking: IBooking;
  localHouse: IHouse;

  constructor(private API: APIService) { }

  ngOnInit() {
  }

  acceptBooking() {
    this.API.acceptBooking(this.localBooking.Id).subscribe( data => {
      this.ngOnInit();
      this.bookingAccepted.emit();
    });
  }
}
