import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { newapiservice } from '../Shared/newapiservice.model';
@Injectable({
  providedIn: 'root'
})
export class NewapiserviceService {

  constructor(private http: HttpClient) { }
  get_details(): Observable<newapiservice[]> {
    return this.http.get<newapiservice[]>('./assets/apiservicedetails.json')
  }
}
