import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { Country } from 'src/app/models/country';
import { CountrydetailComponent } from '../countrydetail/countrydetail.component';
import { State } from 'src/app/models/state';

@Component({
  selector: 'app-allcountry',
  templateUrl: './allcountry.component.html',
  styleUrls: ['./allcountry.component.css']
})
export class AllcountryComponent implements OnInit {
@Input() allCountries:Country[]=[]
@Input() currentstate:State={}
@Output() clickHandler:EventEmitter<State> = new EventEmitter()
@Output() secondClickHandler:EventEmitter<string>= new EventEmitter

  selectedCountry: string =""
  constructor() { }

  
  ngOnInit(): void {
    
  }
  setSelectedCountry(country:string){
    this.selectedCountry=country
  }
  buttonClicked(){
    console.log("Anda Menuju Halaman Detail Negara")
    this.clickHandler.emit({
      prevState:this.currentstate.currentState,
      currentState:2
    })
    this.secondClickHandler.emit(this.selectedCountry)
  }

}
