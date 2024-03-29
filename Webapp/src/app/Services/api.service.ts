import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ICountry} from '../Interfaces/Icountry';
import {ICity} from '../Interfaces/Icity';
import {IMembre} from '../Interfaces/imembre';
import {IHouse} from '../Interfaces/ihouse';
import {IHouseType} from '../Interfaces/ihouse-type';
import {IOptions} from '../Interfaces/ioptions';
import {IAvailibility} from '../Interfaces/iavailibility';
import {FileLikeObject} from 'ng2-file-upload';
import {Account_Types} from './auth.service';

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


  addHouse(house: IHouse, selectedFile: FileLikeObject) {

    console.log('XXX');

    const fd = new FormData();

    if (house.Id) { fd.append('Id', house.Id.toString()); }
    if (house.Nb_guest) { fd.append('Nb_guest', house.Nb_guest.toString()); }
    if (house.Active) { fd.append('Active', house.Active.toString()); }
    if (house.Deletion_time) { fd.append('Deletion_time', house.Deletion_time.toString()); }
    if (house.Creation_date) { fd.append('Creation_date', house.Creation_date.toString()); }
    if (house.Insurance_mandatory !== undefined) { fd.append('Insurance_mandatory', house.Insurance_mandatory ? '1' : '0'); }
    if (house.City_id) { fd.append('City_id', house.City_id.toString()); }
    if (house.Country_id) { fd.append('Country_id', house.Country_id.toString()); }
    if (house.Membre_id) { fd.append('Membre_id', house.Membre_id.toString()); }
    if (house.House_type_id) { fd.append('House_type_id', house.House_type_id.toString()); }
    if (house.Note) { fd.append('Note', house.Note.toString()); }
    if (house.Options) { fd.append('Options', JSON.stringify(house.Options)); }
    if (selectedFile) {
     fd.append('picture', selectedFile.rawFile, selectedFile.name);
    }

    fd.append('Title', house.Title);
    fd.append('Short_description', house.Short_description);
    fd.append('Long_description', house.Long_description);
    fd.append('Picture', house.Picture);
    fd.append('Street', house.Street);
    fd.append('Num', house.Num);
    fd.append('Box', house.Box);
    fd.append('City_Name', house.City_Name);
    fd.append('City_Zip', house.City_Zip);
    fd.append('Country_Name', house.Country_Name);
    fd.append('House_type_name', house.House_type_name);

    return this.http.post<IHouse>(this.UrlBase + '/houses', fd);
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
    if (a.House_id) {fd.append('House_id', a.House_id.toString()); }
    return this.http.post(this.UrlBase + '/availibilities', fd);
  }


  /* ------------   AUTH   -------------- */


  login(login) {
    return this.http.post<IMembre>(this.UrlBase + '/auth/login', login);
  }

  oauthLogin(email, accountType: Account_Types) {
    const fd = new FormData();
    fd.append('email', email);
    fd.append('accountType', accountType.toString());
    return this.http.post<any>(this.UrlBase + '/oauth/login', fd);
  }


  /* ------------   TEST   -------------- */


  testPicture(data) {
    return this.http.post(this.UrlBase + '/test/picture', data);
  }


}
