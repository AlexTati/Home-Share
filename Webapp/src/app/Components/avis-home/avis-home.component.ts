import {Component, Input, OnInit} from '@angular/core';
import {IHouse} from '../../Interfaces/ihouse';
import {IComment} from '../../Interfaces/icomment';

@Component({
  selector: 'app-avis-home',
  templateUrl: './avis-home.component.html',
  styleUrls: ['./avis-home.component.css']
})
export class AvisHomeComponent implements OnInit {

  @Input() AvisHome: IHouse;

  constructor() { }

  ngOnInit() {
  }

}
