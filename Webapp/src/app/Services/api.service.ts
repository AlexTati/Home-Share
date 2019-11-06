import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ICountry} from '../Interfaces/Icountry';
import {ICity} from '../Interfaces/Icity';
import {IMembre} from '../Interfaces/imembre';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  UrlBase: string = 'http://sam.ovh:3000';

  constructor(private http: HttpClient) {
  }

  getCountries() {
    return this.http.get<ICountry[]>(this.UrlBase + '/countries');
  }

  getCities(Id) {
    return this.http.get<ICity[]>(this.UrlBase + '/countries/' + Id + '/cities');
  }

  registerMembre(membre) {
    return this.http.post<IMembre>(this.UrlBase + '/members', membre);
  }

  testPicture(data) {
    return this.http.post(this.UrlBase + '/test/picture', data);
  }

}
