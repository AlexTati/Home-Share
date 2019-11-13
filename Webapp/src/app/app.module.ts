import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {RegisterComponent} from './pages/Member/register/register.component';
import {ConnexionComponent} from './pages/Member/connexion/connexion.component';
import {FormAddressComponent} from './Components/form-address/form-address.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ZoneComponent} from './pages/Member/zone/zone.component';
import {ListHouseComponent} from './pages/Member/list-house/list-house.component';
import {FileUploadComponent} from './Components/file-upload/file-upload.component';
import {EditHouseComponent} from './pages/house/edit-house/edit-house.component';
import {FileUploadModule} from 'ng2-file-upload';
import {CardMembreComponent} from './Components/card-membre/card-membre.component';
import {AddHouseComponent} from './pages/house/add-house/add-house.component';
// @ts-ignore
import {SearchResultCardComponent} from './Components/search-result-card/search-result-card.component';
import {NgxBootstrapSliderModule} from 'ngx-bootstrap-slider';
import {OptionsSelectorComponent} from './Components/options-selector/options-selector.component';
import {HouseTypeSelectorComponent} from './Components/house-type-selector/house-type-selector.component';
import {CountrySelectorComponent} from './Components/country-selector/country-selector.component';
import {OptionsDisplayerComponent} from './Components/options-displayer/options-displayer.component';
import {NgDateRangePickerModule} from 'ng-daterangepicker';
import {AvailibilitiesManagerComponent} from './Components/availibilities-manager/availibilities-manager.component';
import {AvailibilityComponent} from './Components/availibility/availibility.component';
import {AvailibilityPickerComponent} from './Components/availibility-picker/availibility-picker.component';
import {ErrorBannerComponent} from './Components/error-banner/error-banner.component';

import {SocialLoginModule, AuthServiceConfig} from 'angularx-social-login';
import {GoogleLoginProvider, FacebookLoginProvider} from 'angularx-social-login';
import { EditProfileComponent } from './pages/Member/edit-profile/edit-profile.component';
import { MemberEditComponent } from './Components/member-edit/member-edit.component';
import { RegisterFromSocialComponent } from './pages/Member/register-from-social/register-from-social.component';
import { HouseEditComponent } from './Components/house-edit/house-edit.component';
import { MeteoComponent } from './Components/meteo/meteo.component';
import { TestComponent } from './pages/test/test.component';
import { EchangeHouseComponent } from './pages/house/echange-house/echange-house.component';
import { DetailsHouseSwitchComponent } from './Components/details-house-switch/details-house-switch.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { MapComponent } from './Components/map/map.component';
import {AgmCoreModule} from '@agm/core';
import { SearchFormComponent } from './Components/search-form/search-form.component';


const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('353062907789-vl7rgkjskqdmmjr2fc8ba8h1dltpb3ck.apps.googleusercontent.com')
  },
  /*{
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('Facebook-App-Id')
  }*/
]);

export function provideConfig() {
  return config;
}


const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'test', component: TestComponent},
  {path: 'member/register', component: RegisterComponent},
  {path: 'member/connexion', component: ConnexionComponent},
  {path: 'member/zone', component: ZoneComponent},
  {path: 'member/listHouse', component: ListHouseComponent},
  {path: 'member/edit-profile', component: EditProfileComponent},
  {path: 'house/edit/:id', component: EditHouseComponent},
  {path: 'house/add-house', component: AddHouseComponent},
  {path: 'house/echange-house/:id', component: EchangeHouseComponent},
  {path: '*', component: HomeComponent}
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
    CardMembreComponent,
    AddHouseComponent,
    CardMembreComponent,
    SearchResultCardComponent,
    OptionsSelectorComponent,
    HouseTypeSelectorComponent,
    CountrySelectorComponent,
    OptionsDisplayerComponent,
    AvailibilityComponent,
    AvailibilitiesManagerComponent,
    AvailibilityPickerComponent,
    ErrorBannerComponent,
    EditProfileComponent,
    MemberEditComponent,
    RegisterFromSocialComponent,
    HouseEditComponent,
    MeteoComponent,
    TestComponent,
     EchangeHouseComponent,
    DetailsHouseSwitchComponent,
    CarouselComponent,
    MapComponent,
    SearchFormComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false} // <-- debugging purposes only
    ),
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgxBootstrapSliderModule,
    FileUploadModule,
    NgDateRangePickerModule,
    SocialLoginModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDRcurFZUO9otEZ1z3C2bMv41lslAWz1FU'
    })
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
