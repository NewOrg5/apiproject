import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DhiApiKeyBasicDTO } from '../Shared/basicdetails';
import { dhiApiKeyServiceDetailsDTO } from '../Shared/apiKeyServiceDetails';
import { keydetails } from '../Shared/keydetails';
@Injectable({
  providedIn: 'root'
})
export class ShowterrentsService {


  base_url = environment.newserviceURL;
  constructor(private http: HttpClient) { }
  // getterrentdetails(): Observable<any> {
  //   return this.http.get<any>('./assets/terrentdetails.json');
  // }
  getTenantDetails(): Observable<any> {
    console.log(this.base_url)
    return this.http.get<any>(`${this.base_url}allactivekeys`);

  }

  getAllApiServices() {
    return this.http.get<any>(`${this.base_url}allservices`);
  }


  deleteApiService(id: string) {
    return this.http.delete(`${this.base_url}removeservice/${id}`)
  }

  addNewApiService(newservice:dhiApiKeyServiceDetailsDTO[]) {
    console.log(newservice)
    return this.http.post<any>(`${this.base_url}addnewservice`,newservice);
  }

  createNewApiKey(dhiApiKeyBasicDTO: DhiApiKeyBasicDTO[]) {
    return this.http.post<keydetails>(`${this.base_url}newapikey`,dhiApiKeyBasicDTO);
  }

  updateStatus(id: string, status: string) {
    return this.http.put<DhiApiKeyBasicDTO>(`${this.base_url}update/${id}/${status}`, {});
  }

  getAllTenantIds() {
    return this.http.get<string[]>(`${this.base_url}alltenantids`);
  }

  apiServiceByTenantId(tenantId: string) {
    return this.http.get<DhiApiKeyBasicDTO[]>(`${this.base_url}tenantkeys/${tenantId}`);
  }


  getServiceNames() {
    return this.http.get<string[]>(`${this.base_url}servicenames`);
  }

  searchString(str: string) {
    return this.http.get<keydetails[]>(`${this.base_url}search/${str}`);
  }

}
