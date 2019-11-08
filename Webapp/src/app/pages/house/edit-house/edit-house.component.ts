import {Component, OnInit} from '@angular/core';
import {APIService} from '../../../Services/api.service';
import {FileLikeObject} from 'ng2-file-upload';
import {IOptions} from '../../../Interfaces/ioptions';
import {IHouseType} from '../../../Interfaces/ihouse-type';
import {ICountry} from '../../../Interfaces/Icountry';

@Component({
  selector: 'app-edit-house',
  templateUrl: './edit-house.component.html',
  styleUrls: ['./edit-house.component.css']
})
export class EditHouseComponent implements OnInit {

  selectedFile: FileLikeObject;
  options: IOptions[] = [
    {Id: 1, Name: 'Sam'},
    {Id: 2, Name: 'Sam'},
    {Id: 1, Name: 'Sam'},
    {Id: 1, Name: 'Sam'},
    {Id: 1, Name: 'Sam'},
  ];

  constructor(private api: APIService) {
  }

  ngOnInit() {
  }

  onFromSubmit() {
    let formData = new FormData();

    if (this.selectedFile) {
      formData.append('picture', this.selectedFile.rawFile, this.selectedFile.name);
    }

    this.api.testPicture(formData).subscribe(data =>
      console.log(data)
    );
  }

  OnFileSelected($event: FileLikeObject) {
    this.selectedFile = $event;
    console.log($event);
  }

  optionsChanged($event: IOptions[]) {
    console.log($event);
  }

  houseTypeChanged($event: IHouseType) {
    console.log($event);
  }

  onCountryChange($event: ICountry) {
    console.log($event);
  }
}
