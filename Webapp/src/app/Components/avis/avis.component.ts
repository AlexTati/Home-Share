import {Component, Input, OnInit} from '@angular/core';
import {IHouse} from '../../Interfaces/ihouse';
import {IComment} from '../../Interfaces/icomment';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {

  @Input() avis: IComment[];

  constructor() { }

  ngOnInit() {
  }

}
