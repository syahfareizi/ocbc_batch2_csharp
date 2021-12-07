import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { NoencapsulationComponent } from '../noencapsulation/noencapsulation.component';
import { EmualtedencapsulationComponent } from '../emualtedencapsulation/emualtedencapsulation.component';

@Component({
  selector: 'app-shadow-dom-encapsulation',
  templateUrl: './shadow-dom-encapsulation.component.html',
  styleUrls: ['./shadow-dom-encapsulation.component.css'],
  encapsulation : ViewEncapsulation.ShadowDom,
})
export class ShadowDomEncapsulationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
