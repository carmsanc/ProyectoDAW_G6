import { Injectable } from '@angular/core';
import { configuration } from './configuration';
import { Observable, of, from } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { environment } from './../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  config = configuration;
  

  constructor() { }

  getConfig(){
    return this.config;
  }


  getPostByID(id: number) {
      return this.config.blog.posts[id - 1];

  }

}
