import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  // @Input() title: string = ""

  @Output() clickHandler: EventEmitter<string> = new EventEmitter()
  @Output() anotherClickHandler: EventEmitter<string> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  handleClick () {
    console.log("Click berjalan!")
    this.clickHandler.emit("Hai! Ini adalah pesan dari anakmu.")
    this.anotherClickHandler.emit("Halo kawan!")
  }

}
