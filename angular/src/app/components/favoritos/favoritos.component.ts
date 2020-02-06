import { Component, OnInit } from '@angular/core';
import { FavoritosService } from "../../services/favoritos.service";
@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
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
  constructor(private taskService: FavoritosService) { }

  ngOnInit() {
    this.taskService.getFavoritos()
      .subscribe(
        res => {
          this.favoritos = res;
        },
        err => console.log(err)
      )
  }
}