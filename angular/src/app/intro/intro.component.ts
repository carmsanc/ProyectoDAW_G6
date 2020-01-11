import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  intro ={
    tagline: 'NOSOTROS',
    title: 'Conoce más sobre nosotros',
    subtitle: 'Plataforma que conecta a los inversionistas con ideas emprendedoras valiosas para catapultarlas a una nueva dimensión, promoviendo su permanencia y trascendencia, estimulando de esta forma la inversión en etapa temprana y coadyuvando a la reducción de la brecha de financiamiento existente.',
    
  };
  constructor() { }

  ngOnInit() {
  }

}
