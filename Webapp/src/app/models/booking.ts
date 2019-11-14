import {IBooking} from '../Interfaces/ibooking';

export class Booking implements IBooking{
  Accepter: Date;
  DateAcceptation: Date;
  DateDebut: Date;
  DateDemande: Date;
  DateFin: Date;
  DatePayement: Date;
  House_id: number;
  Id: number;
  Insurance: number;
  Membre_id: number;
}
