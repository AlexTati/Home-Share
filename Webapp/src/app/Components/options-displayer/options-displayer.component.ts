import {Component, Input, OnInit} from '@angular/core';
import {IOptions} from '../../Interfaces/ioptions';
import {IMembre} from '../../Interfaces/imembre';

@Component({
  selector: 'app-options-displayer',
  templateUrl: './options-displayer.component.html',
  styleUrls: ['./options-displayer.component.css']
})
export class OptionsDisplayerComponent implements OnInit {

  @Input() options: IOptions[];

  constructor() {
  }

  ngOnInit() {
  }

}
