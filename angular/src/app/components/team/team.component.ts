import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  
  team ={
    tagline: 'EQUIPO',
    title: 'Conoce al equipo de Startelp'
  };
  constructor() { }

  ngOnInit() {
  }

}
