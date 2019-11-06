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


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'member/register', component: RegisterComponent },
  { path: 'member/connexion', component: RegisterComponent },
  //{ path: 'hero/:id',      component: HeroDetailComponent },
  //{ path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    ConnexionComponent,
    FormAddressComponent
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
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
