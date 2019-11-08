import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/Member/register/register.component';
import { ConnexionComponent } from './pages/Member/connexion/connexion.component';
import {FormAddressComponent} from './Components/form-address/form-address.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ZoneComponent } from './pages/Member/zone/zone.component';
import { ListHouseComponent } from './pages/Member/list-house/list-house.component';
import {FileUploadComponent} from './Components/file-upload/file-upload.component';
import { EditHouseComponent } from './pages/house/edit-house/edit-house.component';
import { FileUploadModule } from 'ng2-file-upload';
import { CardMembreComponent } from './Components/card-membre/card-membre.component';
import { AddHouseComponent } from './pages/house/add-house/add-house.component';
import { SearchResultComponent } from './Components/search-result-card/search-result.component';
import { SearchResultCardComponent } from './Components/search-result-card/search-result-card.component';



const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'member/register', component: RegisterComponent },
  { path: 'member/connexion', component: ConnexionComponent },
  { path: 'member/zone', component: ZoneComponent },
  { path: 'member/listHouse', component: ListHouseComponent},
  { path: 'house/edit', component: EditHouseComponent },
  { path: 'house/add-house', component: AddHouseComponent },
  { path: '**', component: HomeComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    ConnexionComponent,
    FormAddressComponent,
    ZoneComponent,
    ListHouseComponent,
    FileUploadComponent,
    EditHouseComponent,
    CardMembreComponent
    AddHouseComponent
    CardMembreComponent,
    SearchResultComponent,
    SearchResultCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
