import {Component, Input, OnInit} from '@angular/core';
import {IHouse} from '../../Interfaces/ihouse';

@Component({
  selector: 'app-details-house-switch',
  templateUrl: './details-house-switch.component.html',
  styleUrls: ['./details-house-switch.component.css']
})
export class DetailsHouseSwitchComponent implements OnInit {

  @Input() fiche: IHouse;

  constructor() { }

  ngOnInit() {
  }
}
