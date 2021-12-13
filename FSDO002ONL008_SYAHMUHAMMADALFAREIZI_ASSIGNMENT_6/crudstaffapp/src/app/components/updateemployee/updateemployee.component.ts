import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/router';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { EmployeemanagementService } from 'src/app/services/employeemanagement.service';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit {

  
  id:number=1
  constructor(private activateRoute:ActivatedRoute,
    public employeemanagementService:EmployeemanagementService,
    public route:Router) {
    this.id=this.activateRoute.snapshot.params.id
   }

  roles = ["0","1"]

  updateEmployeeForm = new FormGroup({
    Id:new FormControl(this.id),
    Title: new FormControl('',[Validators.required,Validators.minLength(3)]),
    FirstName: new FormControl('',[Validators.required,Validators.minLength(3)]),
    LastName: new FormControl('',[Validators.required,Validators.minLength(3)]),
    Email: new FormControl('',[Validators.required,Validators.email]),
    Role: new FormControl('',[Validators.required,Validators.minLength(1)]),
  })

  

  get Id(){
    return this.updateEmployeeForm.get('Id')
  }
  get Title(){
    return this.updateEmployeeForm.get('Title')
  }
  get FirstName(){
    return this.updateEmployeeForm.get('FirstName')
  }
  get LastName(){
    return this.updateEmployeeForm.get('LastName')
  }
  get Email(){
    return this.updateEmployeeForm.get('Email')
  }
  get Role(){
    return this.updateEmployeeForm.get('Role')
  }

  ngOnInit(): void {
    console.log(this.id)
  }

  updateEmployee(id:number=this.id){
    this.employeemanagementService.updateEmployee(this.updateEmployeeForm.value,id).subscribe((res)=>{
      if(res.result){
      }
      this.updateEmployeeForm.reset()
      this.route.navigate(['/homepage'])
    })
  }
}
