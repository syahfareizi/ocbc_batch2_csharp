import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { NoencapsulationComponent } from '../noencapsulation/noencapsulation.component';

@Component({
  selector: 'app-emualtedencapsulation',
  template: `<h2>Emulated</h2>
  <div class="emulated-message">Emualted Encaptulation</div>
  <app-noencapsulation></app-noencapsulation>
  `,
  styles: ['h2,  .emulated-message {    color: green;  }  '],
  encapsulation : ViewEncapsulation.Emulated
})
export class EmualtedencapsulationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
