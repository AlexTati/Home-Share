import { Component, OnInit } from '@angular/core';
import {IMembre} from '../../../Interfaces/imembre';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onAddressChanged(address: IMembre) {
    console.log(address);
  }
}
