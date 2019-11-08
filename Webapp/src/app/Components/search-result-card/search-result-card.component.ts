import {Component, Input, OnInit} from '@angular/core';
import {IHouse} from '../../Interfaces/ihouse';

@Component({
  selector: 'app-search-result-card',
  templateUrl: './search-result-card.component.html',
  styleUrls: ['./search-result-card.component.css']
})
export class SearchResultCardComponent implements OnInit {

  @Input()fiche: IHouse

  constructor() { }

  ngOnInit() {
  }

}
