import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Belajar Angular FSD OCBC Batch 2'
  message = ''

  showMessage(e:string){
    this.message=e
  }
}
