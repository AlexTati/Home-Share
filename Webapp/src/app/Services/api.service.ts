import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ICountry} from '../Interfaces/Icountry';
import {ICity} from '../Interfaces/Icity';
import {IMembre} from '../Interfaces/imembre';
import {IHouse} from '../Interfaces/ihouse';
import {IHouseType} from '../Interfaces/ihouse-type';
import {IOptions} from '../Interfaces/ioptions';
import {IAvailibility} from '../Interfaces/iavailibility';

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

  login(login) {
    return this.http.post<IMembre>(this.UrlBase + '/auth/login', login);
  }

  getHouseType() {
    return this.http.get<IHouseType[]>(this.UrlBase + '/house-types');
  }

  getAllHouses() {
    return this.http.get<IHouse[]>(this.UrlBase + '/houses');
  }

  getHousesForMember(memberId) {
    return this.http.get<IHouse[]>(this.UrlBase + '/members/' + memberId + '/houses');
  }

  getOptions() {
    return this.http.get<IOptions[]>(this.UrlBase + '/options');
  }

  getAvailibilitiesForHouse(houseId) {
    return this.http.get<IAvailibility[]>(this.UrlBase + '/houses/' + houseId + '/availibilities');
  }

  deleteAvailibility(id) {
    return this.http.delete(this.UrlBase + '/availibilities/' + id, {});
  }

  createAvailibility(a: IAvailibility) {
    let fd = new FormData();
    fd.append('Start_date', a.Start_date.toISOString());
    fd.append('End_date', a.End_date.toISOString());
    fd.append('House_id', a.House_id.toString());
    return this.http.post(this.UrlBase + '/availibilities', fd);
  }
}
