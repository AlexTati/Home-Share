import {IComment} from '../Interfaces/icomment';

export class Comment implements IComment{
  Creation_date: Date;
  House_id: number;
  Id: number;
  Membre_id: number;
  Note: number;
  Text: string;
}
