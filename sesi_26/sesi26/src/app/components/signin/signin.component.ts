import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms'
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  constructor(public authService:AuthService,
    public router:Router) { }

  signinForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(5)]),
  })

  
  get password()  {
    return this.signinForm.get('password')
  }
  get email()  {
    return this.signinForm.get('email')
  }

  ngOnInit(): void {
  }

  signin(){
    this.authService.signin(this.signinForm.value)
  }
}
