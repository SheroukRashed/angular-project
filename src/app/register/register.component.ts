import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from  '@angular/forms';
import { Router } from  '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public inValidEmail:Boolean=false;

  constructor(private authService: AuthService,  private router: Router, 
              private formBuilder: FormBuilder ) {}
  
  public registerForm = new FormGroup({
    'username': new FormControl('',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(25),
      ]),
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


  register(){
    this.isSubmitted = true;
    this.inValidEmail = this.emailDomainValidator(this.registerForm.controls.email.value);
    console.log(this.inValidEmail);
    if(this.registerForm.invalid || this.inValidEmail){
      return;
    }
    this.authService.register(this.registerForm.value);
    this.router.navigateByUrl('/login');
  }

  ngOnInit() {
  }

  emailDomainValidator(emailValue) { 
    let users: any[] = JSON.parse(localStorage.getItem('users')) || [];
    let matchedUser = users.find( 
      user => (user.email === emailValue)
       );
    if(matchedUser){
      //console.log(true);
      return true;
    }
    
  }
}
