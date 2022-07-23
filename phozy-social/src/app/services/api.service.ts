import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiBaseUrl: string='phozy-social/src/assets/store.json';

  constructor(private http: HttpClient) {
    

  }
  get(path:string=''){
    //return this.http.get<T>(this.apiBaseUrl+''+path);
  }
  post(path:string='',data:any,options:any) {
    return this.http.post(this.apiBaseUrl+''+path,data,options);
  }
  getAlbums():Observable<T> {
  
    return this.http.get<T[]>(this.apiBaseUrl+'');
  
  }
}
