import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IAvailibility} from '../../Interfaces/iavailibility';

@Component({
  selector: 'app-availibility-picker',
  templateUrl: './availibility-picker.component.html',
  styleUrls: ['./availibility-picker.component.css']
})
export class AvailibilityPickerComponent implements OnInit {

  @Output() change = new EventEmitter<IAvailibility>();
  @Input() houseId: number = null;

  private foo
  private options;

  constructor() { }

  ngOnInit() {
    this.options = {
      theme: 'cyan',
      range: 'tm',
      dayNames: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
      presetNames: ['Ce mois', 'Mois passé', 'Cette semaine', 'Semaine passée', 'Cette année', 'Année passée', 'Début', 'Fin'],
      dateFormat: 'dd/MM/yyyy',
      outputFormat: 'YYYY/MM/DD',
      startOfWeek: 1
    };
  }

  onChange($event) {
    this.change.emit({
      House_id: this.houseId,
      Start_date: new Date($event.split('-')[0]),
      End_date:   new Date($event.split('-')[1]),
      Id: null,
    });
  }

}
