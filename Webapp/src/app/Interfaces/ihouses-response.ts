import {IHouse} from './ihouse';

export interface IHousesResponse {
  status: string;
  data: IHouse[];
  message: string;
}
