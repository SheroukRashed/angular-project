import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public getLoggedInUserId(){
    let loggedInUser = JSON.parse(localStorage.getItem('ACCESS_TOKEN'));
    return loggedInUser.loggedInUserid;
  }

  public getLoggedInUserbyId(){
    let users: any[] = JSON.parse(localStorage.getItem('users')) || [];
    let loggedInUserId = this.getLoggedInUserId();
    return users.find( 
      user => (user.id === loggedInUserId)
       );
  }
}
