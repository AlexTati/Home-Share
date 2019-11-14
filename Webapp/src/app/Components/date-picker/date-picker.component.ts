import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Availability} from '../../models/availability';
import {IAvailibility} from '../../Interfaces/iavailibility';
import {BsDatepickerConfig} from 'ngx-bootstrap';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  @Output() dateChange = new EventEmitter<IAvailibility>();
  @Input() houseId: number = null;

  colorTheme = 'theme-blue';
  bsConfig: Partial<BsDatepickerConfig>;

  constructor() { }

  ngOnInit() {
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });
  }

  dateChanged($event) {
    const a = new Availability();
    a.House_id = this.houseId;
    a.Start_date = $event[0];
    a.End_date = $event[1];
    this.dateChange.emit(a);
  }
}
