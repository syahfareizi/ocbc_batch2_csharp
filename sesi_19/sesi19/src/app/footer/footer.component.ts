import { Component, EventEmitter, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
@Output() clickHandler : EventEmitter<string> = new EventEmitter
  constructor() { }

  ngOnInit(): void {
  }
  handleClick():void {
    console.log('Click Berjalan')
    this.clickHandler.emit('Hai ini adalah pesan dari anakmu')
  }

}
