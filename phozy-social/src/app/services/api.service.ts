import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiBaseUrl: string='../../assets/store.json';

  constructor(private http: HttpClient) {
    

  }
  get(path:string=''){
    //return this.http.get<T>(this.apiBaseUrl+''+path);
  }
  
  getAlbums() {
  
    return this.http.get(this.apiBaseUrl) as any;
  
  }
}
