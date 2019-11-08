import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../Services/auth.service';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css']
})
export class ZoneComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

}
