import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl } from  '@angular/forms';
import { Router } from  '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,  private router: Router, 
              private formBuilder: FormBuilder ) {}
  
  public loginForm = new FormGroup({
    'email': new FormControl('',
      [
        Validators.required,
        Validators.email,
      ]),
    'password': new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ])

  });
  isSubmitted  =  false;


  login(){
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    this.authService.login(this.loginForm.value);
    if(this.authService.isLoggedIn()){
      this.router.navigateByUrl('/home');
    }else{
      alert(" Invalid User ... Please Sign Up First");
    }
  }

  ngOnInit() {
  }

 

}
