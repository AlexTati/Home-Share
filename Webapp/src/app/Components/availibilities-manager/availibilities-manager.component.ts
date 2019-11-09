import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IAvailibility} from '../../Interfaces/iavailibility';
import {APIService} from '../../Services/api.service';

@Component({
  selector: 'app-availibilities-manager',
  templateUrl: './availibilities-manager.component.html',
  styleUrls: ['./availibilities-manager.component.css']
})
export class AvailibilitiesManagerComponent implements OnInit {

  @Output() change = new EventEmitter<IAvailibility[]>();
  @Input() editable: boolean = false;
  @Input() houseId: number;

  showAddPanel: boolean = false;
  newAvailibility: IAvailibility;
  availibilities: IAvailibility[] = [];

  constructor(private srv: APIService) {
  }

  ngOnInit() {
    this.srv.getAvailibilitiesForHouse(this.houseId).subscribe(data => {
      this.availibilities = data;
    });
  }

  togglePannel() {
    this.showAddPanel = !this.showAddPanel;
  }

  addAvailibility() {
    this.newAvailibility.House_id = this.houseId;
    this.srv.createAvailibility(this.newAvailibility).subscribe(data => {
      this.availibilities.push(this.newAvailibility);
    })
    this.showAddPanel = !this.showAddPanel;
  }

  delete($event: IAvailibility) {
    this.srv.deleteAvailibility($event.Id).subscribe(data => {
      this.availibilities = this.availibilities.filter(elem => {
        return elem !== $event;
      });
    });

  }

  newAvailibilityChanged($event: IAvailibility) {
    console.log($event);
    this.newAvailibility = $event;
  }
}
