import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CustomFileSizePipe } from './custom-file-size.pipe';
import {Sesi23Module} from './sesi-23/sesi-23.module';
import { NoencapsulationComponent } from './noencapsulation/noencapsulation.component';
import { EmualtedencapsulationComponent } from './emualtedencapsulation/emualtedencapsulation.component';
import { ShadowDomEncapsulationComponent } from './shadow-dom-encapsulation/shadow-dom-encapsulation.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CustomFileSizePipe,
    NoencapsulationComponent,
    EmualtedencapsulationComponent,
    ShadowDomEncapsulationComponent,

  ],
  imports: [
    BrowserModule,
    Sesi23Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
