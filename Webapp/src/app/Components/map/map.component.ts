import {Component, Input, OnInit} from '@angular/core';
import {Iadress} from '../../Interfaces/iadress';
import {HttpClient} from '@angular/common/http';
import {IHouse} from '../../Interfaces/ihouse';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() house: IHouse;
  query: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {

  }

}
