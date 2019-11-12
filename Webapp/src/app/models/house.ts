import {IHouse} from '../Interfaces/ihouse';
import {IAvailibility} from '../Interfaces/iavailibility';
import {IMembre} from '../Interfaces/imembre';
import {IOptions} from '../Interfaces/ioptions';

export class House implements IHouse {
  Id: number;
  Title: string;
  Active: number;
  Availabilities: IAvailibility[];
  Box: string;
  City_Name: string;
  City_Zip: string;
  City_id: number;
  Country_Name: string;
  Country_id: number;
  Creation_date: Date;
  Deletion_time: Date;
  House_type_id: number;
  House_type_name: string;
  Insurance_mandatory: number;
  Lat: string;
  Lng: string;
  Long_description: string;
  Membre_id: number;
  Nb_guest: number;
  Note: number;
  Num: string;
  Owner: IMembre;
  Picture: string;
  Short_description: string;
  Street: string;
  options: IOptions[];
}
