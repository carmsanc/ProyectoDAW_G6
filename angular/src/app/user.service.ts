import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  loginUser(userData): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/auth/',userData);
  }

  
}
