import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies:any[]=[]

  constructor(
    public authService:AuthService,
    public actRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
  }
  
  getMovies(){
    this.authService.getMovies()
    .subscribe(movies=>this.movies = movies)
  }

}
