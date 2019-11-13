import {Component, OnInit} from '@angular/core';
import {APIService} from '../../../Services/api.service';
import {FileLikeObject} from 'ng2-file-upload';
import {IOptions} from '../../../Interfaces/ioptions';
import {IHouseType} from '../../../Interfaces/ihouse-type';
import {ICountry} from '../../../Interfaces/Icountry';
import {Auth_Types, AuthService} from '../../../Services/auth.service';
import {IHouse} from '../../../Interfaces/ihouse';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-house',
  templateUrl: './edit-house.component.html',
  styleUrls: ['./edit-house.component.css']
})
export class EditHouseComponent implements OnInit {

  houseId: number;
  localHouse: IHouse;

  selectedFile: FileLikeObject;
  options: IOptions[] = [
    {Id: 1, Name: 'Sam'},
    {Id: 2, Name: 'Sam'},
    {Id: 1, Name: 'Sam'},
    {Id: 1, Name: 'Sam'},
    {Id: 1, Name: 'Sam'},
  ];

  constructor(private api: APIService, private auth: AuthService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // recup l id
    // recuperer house (id) -> house
    this.route.paramMap.subscribe(data => {
      // @ts-ignore
      const houseId = (data.params.id);

      this.api.getHouse(houseId).subscribe(data => {

        // return this.localHouse = data;
        this.localHouse = data;

      });

    });

    this.auth.checkAuthorizations(Auth_Types.PUBLIC);
  }

  onFromSubmit() {
    const formData = new FormData();

    if (this.selectedFile) {
      console.log(this.selectedFile);
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
