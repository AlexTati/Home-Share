import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {IOptions} from '../../Interfaces/ioptions';
import {APIService} from '../../Services/api.service';

@Component({
  selector: 'app-options-selector',
  templateUrl: './options-selector.component.html',
  styleUrls: ['./options-selector.component.css']
})
export class OptionsSelectorComponent implements OnInit {

  @Output() change = new EventEmitter<IOptions[]>()

  options$: Observable<any[]>;
  options: IOptions[] = [];

  constructor(private srv: APIService) { }

  ngOnInit() {
    this.options$ = this.srv.getOptions();
  }

  onChange() {
    this.change.emit(this.options);
  }
}
