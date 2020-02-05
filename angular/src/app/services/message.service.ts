import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class MessageService {
constructor(private _http: HttpClient) { }
sendMessage(body) {
 return this._http.post(`${environment.apiBaseUrl}/formulario`, body);
 }
}