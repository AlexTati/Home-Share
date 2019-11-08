import {IMembre} from './imembre';

export interface ILoginResponse {
  Status : string;
  Data : IMembre[];
  Message : string;
}
