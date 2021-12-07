import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { Country } from 'src/app/models/country';
import { State } from 'src/app/models/state';

@Component({
  selector: 'app-countrydetail',
  templateUrl: './countrydetail.component.html',
  styleUrls: ['./countrydetail.component.css']
})
export class CountrydetailComponent implements OnInit {
@Input() allCountries:Country[]=[]
@Input() selectedCountry:string=""
@Input() currentState:State={}
@Output() clickHandler:EventEmitter<State>=new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  setState(){
    this.currentState.currentState = this.currentState.prevState
  }
  buttonClicked(){
    this.clickHandler.emit(this.currentState)
  }
}
