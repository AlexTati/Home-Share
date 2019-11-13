import {Component, Input, OnInit} from '@angular/core';
import {IHouse} from '../../Interfaces/ihouse';

@Component({
  selector: 'app-house-result-set',
  templateUrl: './house-result-set.component.html',
  styleUrls: ['./house-result-set.component.css']
})
export class HouseResultSetComponent implements OnInit {

  @Input() houses: IHouse[];

  constructor() { }

  ngOnInit() {
  }

}
