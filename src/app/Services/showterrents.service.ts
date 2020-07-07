import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TerrentDetail } from '../Shared/showdetails.model';
@Injectable({
  providedIn: 'root'
})
export class ShowterrentsService {


  base_url = environment.newserviceURL;
  constructor(private http: HttpClient) { }
  // getterrentdetails(): Observable<any> {
  //   return this.http.get<any>('./assets/terrentdetails.json');
  // }
  apiServiceDetails() {

    return this.http.get<TerrentDetail[]>(`${this.base_url}allactivekeys`);
  }

}
