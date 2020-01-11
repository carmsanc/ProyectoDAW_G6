import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  content= {
    tagline: '¿QUÉ HACEMOS?',
    title:'Conoce los beneficios de Startelp',
    subtitle: 'Oportunidad para encontrar espacios de crecimiento disruptivos Ambiente donde obtener herramientas y habilidades para profesionalizarse como inversionista ángel.',
    phrase: '',
    author:''
  };

  constructor() { }

  ngOnInit() {
  }

}
