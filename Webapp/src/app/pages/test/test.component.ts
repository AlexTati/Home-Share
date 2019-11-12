import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../Services/auth.service';
import {Iadress} from '../../Interfaces/iadress';
import {IHouse} from '../../Interfaces/ihouse';
import {APIService} from '../../Services/api.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {



  private house: IHouse

  constructor(private api: APIService) {
  }

  ngOnInit() {
    this.api.getHouse(20).subscribe( data => {
      this.house = data;
    })
  }

}
