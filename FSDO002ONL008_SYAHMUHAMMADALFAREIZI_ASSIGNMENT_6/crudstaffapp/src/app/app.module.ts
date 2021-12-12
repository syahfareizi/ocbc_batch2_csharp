import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddemployeeComponent } from './components/addemployee/addemployee.component';
import { GetemployeeComponent } from './components/getemployee/getemployee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteemployeeComponent } from './components/deleteemployee/deleteemployee.component';
import { UpdateemployeeComponent } from './components/updateemployee/updateemployee.component';

@NgModule({
  declarations: [
    AppComponent,
    AddemployeeComponent,
    GetemployeeComponent,
    DeleteemployeeComponent,
    UpdateemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
