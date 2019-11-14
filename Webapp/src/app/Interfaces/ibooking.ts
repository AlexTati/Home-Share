export interface IBooking {
  Id : number;
  Accepter : Date;
  DateDemande : Date;
  DatePayement: Date;
  DateAcceptation: Date;
  DateDebut: Date;
  DateFin: Date;
  Insurance:number;
  Membre_id: number;
  House_id:number;
}
