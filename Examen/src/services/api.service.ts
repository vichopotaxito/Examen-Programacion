import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL = 'https://2kn9nlhs-8000.brs.devtunnels.ms/api';

  constructor(private http: HttpClient) { }

  login(user: String, pass: String):Observable<any>{
    let myBody = {
      "mailUser": user,
      "password": pass
    }
    return this.http.post(this.apiURL+'/login', myBody )
    .pipe(retry(3));
  }
  
  obtAsig(idprofesor: string):Observable<any>{
    return this.http.get(this.apiURL+'/secciones/' + idprofesor)
    .pipe(retry(3));
  }

  

}
