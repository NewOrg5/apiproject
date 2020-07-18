import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Subject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { credentials } from '../Shared/credentials.model';
import { catchError, tap, mapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  base_url = environment.baseUrl
  email: string

  constructor(private http: HttpClient) { }

  getloginfromapi(email, password): Observable<credentials> {


    let url = `${this.base_url}login`
    console.log(url)
    return this.http.post<any>(url, { email: email, password: password }, { headers: { skip: 'true' } }).pipe(
      tap(token => this.storetoken(email, token))
    );
  }

  storetoken(email, tokenObj) {
    this.email = email;
    localStorage.setItem("email", this.email)
    localStorage.setItem("token", tokenObj["token"])
  }

  isUserLogedIn() {
    return !!this.getToken();
  }

  getToken() {
    const token = localStorage.getItem("token");
    console.log(token)
    return token;
  }
  logOut() {
    this.email = ''
    localStorage.removeItem("token")
  }



}
