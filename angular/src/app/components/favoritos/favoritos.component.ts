import { Component, OnInit } from '@angular/core';
import { FavoritosService } from "../../services/favoritos.service";
import { UserService } from '../../core/user/user.service';
import { UserModel } from '../../core/user/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  public userProfileDetails: UserModel

  favoritos = [{
    _id: 1,
    name: 'startup1',
    categoria: 'Alimentos',
    
},{
    _id: 2,
    name: 'startup2',
    categoria: 'lorem ipsum',
    
},
{
    _id: 3,
    name: 'startup3',
    categoria: 'lorem ipsum',
    
},
    
];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserProfile()
    .subscribe((res: any) => {
        this.userProfileDetails = res['user']
    })
  }
}