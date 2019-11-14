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

  @Input() set house (h: IHouse){
    if(h){
      this.showMap(h);
    }
  }

  lat;
  lng;


  private localHouse: IHouse
  query: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {

  }

  showMap(house: IHouse){
    console.log('reload component');
    this.lat = parseFloat(house.Lat);
    this.lng = parseFloat(house.Lng);
    console.log(this.lat);
    console.log(this.lng);

    this.ngOnInit();
  }

}
