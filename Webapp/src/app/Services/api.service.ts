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

  UrlBase = 'http://sam.ovh:3000';

  constructor(private http: HttpClient) {
  }

  /* -------------   ENUMS   -------------- */

  getCountries() {
    return this.http.get<ICountry[]>(this.UrlBase + '/countries');
  }

  getCities(Id) {
    return this.http.get<ICity[]>(this.UrlBase + '/countries/' + Id + '/cities');
  }

  getOptions() {
    return this.http.get<IOptions[]>(this.UrlBase + '/options');
  }

  getHouseType() {
    return this.http.get<IHouseType[]>(this.UrlBase + '/house-types');
  }


  /* -------------   MEMBRE   ------------- */


  registerMembre(membre: IMembre) {

    const fd = new FormData();

    if (membre.Home_city_id) {
      fd.append('Home_city_id', membre.Home_city_id.toString());
    }
    if (membre.Home_Country_id) {
      fd.append('Home_Country_id', membre.Home_Country_id.toString());
    }
    if (membre.Id) {
      fd.append('Id', membre.Id.toString());
    }
    if (membre.Role) {
      fd.append('Role', membre.Role.toString());
    }

    fd.append('Email', membre.Email);
    fd.append('Firstname', membre.Firstname);
    fd.append('Home_box', membre.Home_box);
    fd.append('Home_City_Name', membre.Home_City_Name);
    fd.append('Home_City_Zip', membre.Home_City_Zip);
    fd.append('Home_Country_Name', membre.Home_Country_Name);
    fd.append('Home_num', membre.Home_num);
    fd.append('Home_street', membre.Home_street);
    fd.append('Lastname', membre.Lastname);
    fd.append('Password', membre.Password);
    fd.append('Phone', membre.Phone);
    fd.append('Username', membre.Username);

    return this.http.post<IMembre>(this.UrlBase + '/members', fd);
  }

  updateMembre(membre: IMembre) {

    const fd = new FormData();

    if (membre.Home_city_id) {
      fd.append('Home_city_id', membre.Home_city_id.toString());
    }
    if (membre.Home_Country_id) {
      fd.append('Home_Country_id', membre.Home_Country_id.toString());
    }
    if (membre.Id) {
      fd.append('Id', membre.Id.toString());
    }
    if (membre.Role) {
      fd.append('Role', membre.Role.toString());
    }

    fd.append('Email', membre.Email);
    fd.append('Firstname', membre.Firstname);
    fd.append('Home_box', membre.Home_box);
    fd.append('Home_City_Name', membre.Home_City_Name);
    fd.append('Home_City_Zip', membre.Home_City_Zip);
    fd.append('Home_Country_Name', membre.Home_Country_Name);
    fd.append('Home_num', membre.Home_num);
    fd.append('Home_street', membre.Home_street);
    fd.append('Lastname', membre.Lastname);
    fd.append('Password', membre.Password);
    fd.append('Phone', membre.Phone);
    fd.append('Username', membre.Username);

  }

  /* -------------   HOUSE   -------------- */


  addHouse(house) {
    return this.http.post<IHouse>(this.UrlBase + '/houses', house);
  }

  getAllHouses() {
    return this.http.get<IHouse[]>(this.UrlBase + '/houses');
  }

  getHousesForMember(memberId) {
    return this.http.get<IHouse[]>(this.UrlBase + '/members/' + memberId + '/houses');
  }


  /* ---------   AVAILABILITIES   --------- */


  getAvailibilitiesForHouse(houseId) {
    return this.http.get<IAvailibility[]>(this.UrlBase + '/houses/' + houseId + '/availibilities');
  }

  deleteAvailibility(id) {
    return this.http.delete(this.UrlBase + '/availibilities/' + id, {});
  }

  createAvailibility(a: IAvailibility) {
    const fd = new FormData();
    fd.append('Start_date', a.Start_date.toISOString());
    fd.append('End_date', a.End_date.toISOString());
    fd.append('House_id', a.House_id.toString());
    return this.http.post(this.UrlBase + '/availibilities', fd);
  }


  /* ------------   AUTH   -------------- */


  login(login) {
    return this.http.post<IMembre>(this.UrlBase + '/auth/login', login);
  }

  oauthLogin(email) {
    const fd = new FormData();
    fd.append('email', email);
    return this.http.post<IMembre>(this.UrlBase + '/oauth/login', fd);
  }


  /* ------------   TEST   -------------- */


  testPicture(data) {
    return this.http.post(this.UrlBase + '/test/picture', data);
  }


}
