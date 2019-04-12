import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { NewUser } from '../models/new-user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  public login(userInfo: User){
    let users: any[] = JSON.parse(localStorage.getItem('users')) || [];
    let matchedUser = users.find( 
      user => (user.email === userInfo.email && user.password === userInfo.password)
       );
    if(matchedUser){
      let access_token = {
        loggedInUserid : matchedUser.id
      };   
      localStorage.setItem('ACCESS_TOKEN', JSON.stringify(access_token));
    }
  }

  public register(userInfo: NewUser){
    let users: any[] = JSON.parse(localStorage.getItem('users')) || [];
    let userData = {
      id : users.length + 1, 
      username: userInfo.username,
      email: userInfo.email,
      password: userInfo.password
    };
      users.push(userData);
      localStorage.setItem('users', JSON.stringify(users));
      //localStorage.setItem('ACCESS_TOKEN', "access_token");
  }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
    this.router.navigateByUrl('/login');
  }
  
}
