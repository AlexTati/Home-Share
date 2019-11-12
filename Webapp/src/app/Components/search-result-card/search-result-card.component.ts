import {Component, Input, OnInit} from '@angular/core';
import {IHouse} from '../../Interfaces/ihouse';

@Component({
  selector: 'app-search-result-card',
  templateUrl: './search-result-card.component.html',
  styleUrls: ['./search-result-card.component.css']
})
export class SearchResultCardComponent implements OnInit {

  @Input()fiche: IHouse;
  @Input()editable: boolean;
  private picUrl: string;

  constructor() { }

  ngOnInit() {
    console.log(this.fiche.Picture);

    if (!this.fiche.Picture){
      this.picUrl = 'https://via.placeholder.com/350x150'
    }else {
      this.picUrl = this.fiche.Picture;
    }
  }

}
