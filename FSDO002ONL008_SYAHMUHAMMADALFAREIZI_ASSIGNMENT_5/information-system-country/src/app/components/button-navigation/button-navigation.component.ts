import { State } from 'src/app/models/state';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-navigation',
  templateUrl: './button-navigation.component.html',
  styleUrls: ['./button-navigation.component.css']
})
export class ButtonNavigationComponent implements OnInit {
  @Input() currentstate:State={}
  @Output() clickAHandler: EventEmitter<State> = new EventEmitter()
  @Output() clickBHandler: EventEmitter<State> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  buttonAClicked(){
    console.log("Anda Kembali ke Homepage")
    this.clickAHandler.emit({
      prevState:this.currentstate.currentState,
      currentState:0
    })
  }
  buttonBClicked(){
    console.log("Anda Menuju Halaman Seluruh Negara")
    this.clickBHandler.emit({
      prevState:this.currentstate.currentState,
      currentState:1,
    })
  }
}
