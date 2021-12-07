import { Component,ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-noencapsulation',
  template: `
    <h2>None</h2>
    <div class="none-message">No Encapsulation</div>`
    ,
  styles: ['h2, .none-messages {color: red;} ' ],
  encapsulation : ViewEncapsulation.None
})
export class NoencapsulationComponent  {}
