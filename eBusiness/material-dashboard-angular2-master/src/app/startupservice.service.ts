import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Startup } from '../app/components/Startup' ;


@Injectable({
  providedIn: 'root'}
)
export class StartupserviceService {
  domain: string= 'http://localhost:3000/';
  constructor(private http: Http) { }
  // getStartups(){
  //   return this.http.get<Startup[]>(`${this.domain}api/v1/datas/historico`).map( res => res);
  // }
  async getStartups():Promise<Startup[]>{
    const response = await this.http.get(`${this.domain}api/v1/datas/historico`).toPromise();
    return response.json() as Startup[];
  }
}
