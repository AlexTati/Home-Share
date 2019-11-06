import {Component, OnInit} from '@angular/core';
import {APIService} from '../../../Services/api.service';
import {FileLikeObject} from 'ng2-file-upload';

@Component({
  selector: 'app-edit-house',
  templateUrl: './edit-house.component.html',
  styleUrls: ['./edit-house.component.css']
})
export class EditHouseComponent implements OnInit {

  selectedFile: FileLikeObject;

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
}
