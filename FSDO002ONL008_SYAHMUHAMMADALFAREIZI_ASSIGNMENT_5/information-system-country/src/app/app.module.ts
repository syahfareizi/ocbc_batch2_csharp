import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonNavigationComponent } from './components/button-navigation/button-navigation.component';
import { HomeComponent } from './components/home/home.component';
import { CountrydetailComponent } from './components/countrydetail/countrydetail.component';
import { AllcountryComponent } from './components/allcountry/allcountry.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonNavigationComponent,
    HomeComponent,
    CountrydetailComponent,
    AllcountryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
