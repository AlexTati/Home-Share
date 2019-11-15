import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IHouse} from '../../Interfaces/ihouse';
import {APIService} from '../../Services/api.service';

@Component({
  selector: 'app-search-result-card',
  templateUrl: './search-result-card.component.html',
  styleUrls: ['./search-result-card.component.css']
})
export class SearchResultCardComponent implements OnInit {

  @Input()fiche: IHouse;
  @Input()editable = false;
  @Output() houseDeleted = new EventEmitter();
  public picUrl: string;

  constructor(private api: APIService) { }

  ngOnInit() {
    console.log(this.fiche.Picture);

    if (!this.fiche.Picture){
      this.picUrl = 'https://via.placeholder.com/350x150'
    }else {
      this.picUrl = this.fiche.Picture;
    }
  }

  deleteHouse() {
    this.api.deleteHouse(this.fiche.Id).subscribe( data => {
      this.houseDeleted.emit();
    });
  }
}
