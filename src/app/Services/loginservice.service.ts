import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { env } from 'process';
import { credentials } from '../Shared/credentials.model';
import { catchError, mapTo, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  env = environment
  base_login_url=env.baseUrl
  user:string
  constructor(private http: HttpClient) { }




getloginfromapi(email,password): Observable<credentials> {
    let url = `${this.env.baseUrl}login`
    console.log(url)
    return this.http.post<any>(url, { email:email, password:password});
  }





}
