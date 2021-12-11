import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { Observable,throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeemanagementService {
  endpoint:string='http://localhost:4000'

  constructor(
    private http:HttpClient,
  ) { }

  //* ADD EMPLOYEE
  addEmployee(employee:Employee): Observable<any>{
    console.log(employee)
    let api=`${this.endpoint}/users`;
    return this.http
                .post(api, employee)
                .pipe( catchError(this.handleError))
  }

  //* ERROR HANDLER
  handleError(error:HttpErrorResponse){
    let msg =''
    if ( error.error instanceof ErrorEvent){
      msg = error.error.message
    } else {
      msg =`Error code :${error.status}\n Message: ${error.message}`
    }
    return throwError(msg)
  }
}
