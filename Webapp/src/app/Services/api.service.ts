import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ICountry} from '../Interfaces/Icountry';
import {ICity} from '../Interfaces/Icity';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  UrlBase: string = 'http://sam.ovh:3000';

  constructor(private http: HttpClient) { }

  getCountries(){
    return this.http.get<ICountry[]>(this.UrlBase + '/countries');
  }

  getCities(Id){
    return this.http.get<ICity[]>(this.UrlBase + '/countries/'+ Id +'/cities');
  }

}
