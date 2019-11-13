import { Component, OnInit, Input } from '@angular/core';
import {IMembre} from '../../Interfaces/imembre';

@Component({
  selector: 'app-card-membre',
  templateUrl: './card-membre.component.html',
  styleUrls: ['./card-membre.component.css']
})
export class CardMembreComponent implements OnInit {

  @Input()membre : IMembre;

  constructor() { }

  ngOnInit() {
    console.log(this.membre);
  }

}
