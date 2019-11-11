import {Component, OnInit} from '@angular/core';
import {APIService} from '../../../Services/api.service';
import {FileLikeObject} from 'ng2-file-upload';
import {IOptions} from '../../../Interfaces/ioptions';
import {IHouseType} from '../../../Interfaces/ihouse-type';
import {ICountry} from '../../../Interfaces/Icountry';
import {Auth_Types, AuthService} from '../../../Services/auth.service';

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

  constructor(private api: APIService, private auth: AuthService) {
  }

  ngOnInit() {
    this.auth.checkAuthorizations(Auth_Types.PUBLIC);
  }

  onFromSubmit() {
    const formData = new FormData();

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

  rangeChanged($event: Date[]) {
    console.log($event[0].toDateString() + '    ' + $event[1].toDateString());
  }

  LoginWithGoogle() {
    this.auth.signInWithGoogle();
  }

  doLogout() {
    this.auth.doLogout();
  }
}
