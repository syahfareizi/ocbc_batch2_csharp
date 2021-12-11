import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable,throwError } from 'rxjs';
import {catchError,map} from 'rxjs/operators';
import { HttpClient,HttpErrorResponse ,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endpoint:string='https://fsd-h8-ocbc-my-movies.herokuapp.com'
  headers=new HttpHeaders().set('Content-Type','application/json')

  constructor(private http:HttpClient,private router:Router) { 

  }
  //* signup
  signUp(user:User): Observable<any>{
    let api=`${this.endpoint}/register`;
    return this.http.post(api, user).pipe( catchError(this.handleError))
  }

  //* error handling
  handleError(error:HttpErrorResponse){
    let msg =''
    if ( error.error instanceof ErrorEvent){
      msg = error.error.message
    } else {
      msg =`Error code :${error.status}\n Message: ${error.message}`
    }
    return throwError(msg)
  }
  //* signin
  signin(user:User){
    return this.http.post<any>(`${this.endpoint}/login`, user).subscribe((res:any)=>{
      localStorage.setItem('access_token',res.token)
      this.getMovies().subscribe((res:any)=>{
        this.router.navigate(['movies']);
      })
    })
  }

  getMovies(): Observable<any>{
    let api= `${this.endpoint}/movies`;
    return this.http.get(api, { headers: this.headers})
    .pipe(catchError(this.handleError)
    )}

    getToken(){
      return localStorage.getItem('access_token')
    }

    get isLoggedIn():boolean{
      let authToken = localStorage.getItem('access_token')
      return (authToken !== null)? true:false
    }

}
