import { Component, Input, OnInit ,Output} from '@angular/core';
import { Country } from 'src/app/models/country';
import { State } from 'src/app/models/state';
import { ButtonNavigationComponent } from '../button-navigation/button-navigation.component';
import { HeaderComponent } from '../header/header.component';
import { AllcountryComponent } from '../allcountry/allcountry.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
@Output() newState:State={}


  constructor() { }
  countries:Country[]=[]
  selectedCountry:string=""
  largestCountry:Country[]=[]
  populatedCountry:Country[]=[]

  ngOnInit(): void {
    this.countries = [
      {
        nama: "United States",
        capital :"Washington",
        area : 9629091,
        population : 310232863,
        gdp : 16720000000000,
        currency : "DOLLAR (USD)"
      },
      {
        nama: "China",
        capital :"Beijing",
        area : 9596960,
        population : 1330044000,
        gdp : 9330000000000,
        currency : "YUAN RENMINBI (CNY)"
      },
      {
        nama: "Japan",
        capital :"Tokyo",
        area : 377835,
        population : 127288000,
        gdp : 5007000000000,
        currency : "YEN (JPY)"
      },
      {
        nama: "Russia",
        capital :"Moscow",
        area : 17100000,
        population : 140702000,
        gdp : 2113000000000,
        currency : "RUBLE (RUB)"
      },
      {
        nama: "Canada",
        capital :"Ottawa",
        area : 9984670 ,
        population : 33679000,
        gdp : 1825000000000,
        currency : "DOLLAR (CAD)"
      },
    ]
    // this.sortLargest()
    // this.sortPopulated()
  }
  state : State = {
    currentState : 0
  }

  setState(nextState: State){
    this.state=nextState
  }
  // sortLargest(){
  //   this.largestCountry=this.countries
  //   this.largestCountry.sort((a, b) => (a.area < b.area) ? 1 : -1)
  // }
  // sortPopulated(){
  //   this.populatedCountry=this.countries
  //   this.populatedCountry.sort((a, b) => (a.population < b.population) ? 1 : -1)
  // }
  checkState(){
    return this.state.currentState
  }
  setSelectedCountry(country:string){
    this.selectedCountry=country
  }
}
