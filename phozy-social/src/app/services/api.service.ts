import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiBaseUrl: string=environment.apiBaseUrl;

  constructor(private http: HttpClient,private router:Router) {
    

  }
  getUserAlbums<T>(username:string){
    return this.http.get<T>(`${this.apiBaseUrl}/profile/${username}/albums`).pipe(catchError(this.errorHandler));
  }
  
  getGeneral(page:number=1,perPage=10) {
   
    return this.http.get(`${this.apiBaseUrl}?page=${page}&perPage=${perPage}`)
  .pipe(catchError(this.errorHandler)) as any
  

  }
  errorHandler(error:HttpErrorResponse) {
    return throwError(error||'')
  }
}
