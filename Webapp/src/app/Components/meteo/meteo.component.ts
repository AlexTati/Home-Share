import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {migrateLegacyGlobalConfig} from '@angular/cli/utilities/config';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {

  @Input() set location (l : string[]){
    if (l[0] == null) return

    this.http.get<any>('http://api.worldweatheronline.com/premium/v1/weather.ashx?key=f42afff522464314bed135825191211&q=' +
      l[0] + ',' + l[1] + '&format=json&num_of_days=1&lang=fr').subscribe( data => {
      this.imgSrc = data.data.current_condition[0].weatherIconUrl[0].value;
      this.rCity = data.data.request[0].query;
      this.rTemp = data.data.current_condition[0].temp_C;
      this.rDesc = data.data.current_condition[0].lang_fr[0].value;
    })

  }

  public rCity;
  public rTemp;
  public rDesc;
  public imgSrc;

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

}
