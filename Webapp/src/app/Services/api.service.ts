import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ICountry} from '../Interfaces/Icountry';
import {ICity} from '../Interfaces/Icity';
import {IMembre} from '../Interfaces/imembre';
import {IHouse} from "../Interfaces/ihouse";
import {ILoginResponse} from '../Interfaces/ilogin-response';
import {IHouseType} from '../Interfaces/ihouse-type';

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

  addHouse(house) {
    return this.http.post<IHouse>(this.UrlBase + '/houses', house);
  }

  login(login){
    return this.http.post<ILoginResponse>(this.UrlBase + '/auth/login', login);
  }

  getHouseType(){
    return this.http.get<IHouseType[]>(this.UrlBase + '/house-types');
  }
}
