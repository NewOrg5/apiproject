import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public tanentDetails = new Subject<string>();
  constructor() { }



  isLoggedIn() {
    console.log('entered inside auth servce islgoin')
    const token = localStorage.getItem('token');
    this.tanentDetails.next(token);
    console.log('this.tanentDetails',this.tanentDetails)
    return token != null;
  }




   token = localStorage.getItem('token');
   
  public isAuthenticated(): boolean {
    console.log("this is the token")
    if(this.token)
    {
      return true
    }else{
      return false
    }
  }

  getJwtToken() {
    const token = localStorage.getItem(this.token);
    console.log("this is jwt token",token)
    return token;
  }
}
