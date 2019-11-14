import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  @Output() selectionChanged = new EventEmitter<number>();
  @Input() Note: number;
  @Input() editable = false;



  constructor() { }

  ngOnInit() {
  }

  select() {
    this.selectionChanged.emit(this.Note);
  }
}
