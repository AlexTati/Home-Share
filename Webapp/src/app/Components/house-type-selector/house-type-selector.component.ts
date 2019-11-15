import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IHouseType} from '../../Interfaces/ihouse-type';
import {APIService} from '../../Services/api.service';
import {Observable} from 'rxjs';
import {ICountry} from '../../Interfaces/Icountry';

@Component({
  selector: 'app-house-type-selector',
  templateUrl: './house-type-selector.component.html',
  styleUrls: ['./house-type-selector.component.css']
})
export class HouseTypeSelectorComponent implements OnInit {

  @Output() change = new EventEmitter<IHouseType>();

  @Input() set houseTypeId(ht: number) {
    if (!ht) {
      return;
    }
    this.localHouseTypeId = ht;
  }

  localHouseTypeId: number;
  houseTypes$: Observable<IHouseType[]>;

  constructor(private dataService: APIService) {
  }

  ngOnInit() {
    this.houseTypes$ = this.dataService.getHouseType();
  }

  onChange($event) {
    this.change.emit($event);
  }

}
