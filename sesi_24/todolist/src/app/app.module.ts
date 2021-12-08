import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TemplatedrivenformComponent } from './components/templatedrivenform/templatedrivenform.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplatedrivenformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
