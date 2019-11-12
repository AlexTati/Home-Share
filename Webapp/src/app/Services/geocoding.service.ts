import {Injectable} from '@angular/core';
import {Iadress} from '../Interfaces/iadress';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {

  constructor(private http: HttpClient) {
  }

  getCoordinates(a: Iadress) {
    const addressQuery = a.Street + ',' + a.Num + ',' + a.City_Zip + ',' + a.City_Name + ',' + a.Country_Name;
    return this.http.get<any>('https://nominatim.openstreetmap.org/search?q=' + addressQuery + '&format=json&limit=1');
  }
}
