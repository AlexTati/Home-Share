import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IAvailibility} from '../../Interfaces/iavailibility';

@Component({
  selector: 'app-availibility',
  templateUrl: './availibility.component.html',
  styleUrls: ['./availibility.component.css']
})
export class AvailibilityComponent implements OnInit {

  @Input() availibility: IAvailibility;
  @Input() editable: boolean = false;
  @Output() onDelete = new EventEmitter<IAvailibility>();

  constructor() {
  }

  ngOnInit() {
  }


  doDelete() {
    this.onDelete.emit(this.availibility);
  }
}
