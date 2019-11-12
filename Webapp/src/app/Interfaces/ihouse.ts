import {IOptions} from "./ioptions";
import {IAvailibility} from "./iavailibility";
import {IMembre} from './imembre';

export interface IHouse {
  Id: number;
  Title: string;
  Short_description: string;
  Long_description: string;
  Nb_guest: number;
  Picture: string;
  Active: number;
  Deletion_time: Date;
  Creation_date: Date;
  Insurance_mandatory: number;
  Street: string;
  Num: string;
  Box: string;
  City_id: number;
  City_Name: string;
  City_Zip: string;
  Country_id: number;
  Country_Name: string;
  Membre_id: number;
  House_type_id: number;
  House_type_name: string;
  Note: number;
  options: IOptions[];
  Availabilities: IAvailibility[];
  Owner: IMembre;
  Lat: string,
  Lng: string,
}
