import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { EmployeemanagementService } from 'src/app/services/employeemanagement.service';
import { Router } from '@angular/router';
import { Role } from 'src/app/models/role';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor(
    public employeemagementService:EmployeemanagementService,
    public router:Router
  ) { }

  ngOnInit(): void {
  }

  roles = ["0","1"]
  addEmployeeForm = new FormGroup({
    Title: new FormControl('',[Validators.required,Validators.minLength(3)]),
    FirstName: new FormControl('',[Validators.required,Validators.minLength(3)]),
    LastName: new FormControl('',[Validators.required,Validators.minLength(3)]),
    Email: new FormControl('',[Validators.required,Validators.email]),
    Role: new FormControl('',[Validators.required,Validators.minLength(1)]),
    Password: new FormControl('',[Validators.required,Validators.minLength(3)]),
    ConfirmPassword: new FormControl('',[Validators.required,Validators.minLength(3)]),
    
  })

  get Title(){
    return this.addEmployeeForm.get('Title')
  }
  get FirstName(){
    return this.addEmployeeForm.get('FirstName')
  }
  get LastName(){
    return this.addEmployeeForm.get('LastName')
  }
  get Email(){
    return this.addEmployeeForm.get('Email')
  }
  get Role(){
    return this.addEmployeeForm.get('Role')
  }
  get Password(){
    return this.addEmployeeForm.get('Password')
  }
  get ConfirmPassword(){
    return this.addEmployeeForm.get('ConfirmPassword')
  }

  addEmployee(){
    this.employeemagementService.addEmployee(this.addEmployeeForm.value).subscribe((res)=>{
      if(res.result){
        this.addEmployeeForm.reset()
        this.router.navigate(['/homepage'])
      }
    })
  }
}
