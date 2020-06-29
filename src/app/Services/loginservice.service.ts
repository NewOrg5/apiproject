import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { env } from 'process';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  env=environment

  constructor(private http:HttpClient) { }

  // http://dhiapikeygen-env.eba-zddiip6y.ap-south-1.elasticbeanstalk.com/login
  getloginfromapi():Observable<any>
  {
    let url = `${this.env.baseUrl}login`
    console.log(url)
    return this.http.get<any>(url)

  }
}
