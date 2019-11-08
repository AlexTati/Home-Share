import {IMembre} from './imembre';

export interface ILoginResponse {
  status : string;
  data : IMembre;
  message : string;
}
