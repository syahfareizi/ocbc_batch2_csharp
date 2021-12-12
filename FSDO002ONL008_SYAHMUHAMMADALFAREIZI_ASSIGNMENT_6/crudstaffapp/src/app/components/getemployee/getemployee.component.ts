import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeemanagementService } from 'src/app/services/employeemanagement.service';

@Component({
  selector: 'app-getemployee',
  templateUrl: './getemployee.component.html',
  styleUrls: ['./getemployee.component.css']
})
export class GetemployeeComponent implements OnInit {

  allEmployee:Employee[]=[]

  constructor(
    private route:Router,
    private employeemanagementService:EmployeemanagementService
  ) { }

  ngOnInit(): void {
    this.getAllEmployee()
  }

  getAllEmployee () {
    this.employeemanagementService
    .getEmployee()
    .subscribe(data => {
      this.allEmployee = data
      console.log(data)
    })
  }

  confirmDelete(id: string) {
    if(confirm(`Are you sure you want to delete Movie ID ${id}?`))
      this.deleteEmployee(id)
  }
  
  deleteEmployee(id:string){
    this.employeemanagementService.deleteEmployee(id).subscribe(data =>{
      this.allEmployee= data
      console.log(data)
    })
    this.route.navigate(['/homepage'])
  }
}
