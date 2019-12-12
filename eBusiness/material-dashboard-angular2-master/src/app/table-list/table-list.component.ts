import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Startup } from "../components/Startup";
import { Inversionista } from "../components/Inversionista";

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})

export class TableListComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
      fetch('./assets/data/startupsdata')
.then( response => response.json())
.then( data => {
  let arreglo = data.startups;
  for (let objeto of arreglo) {
    
    let startup:Startup = new Startup(objeto["Nombre"], objeto['Visitas'],objeto["Categoria"],objeto["Direccion"])
    document.getElementById("tbStartup").innerHTML+=startup.renderizarPlantilla();
    
  }
})
.catch(function(error) {
  console.log('Hubo un problema con la petición Fetch Startup:' + error.message);
});
  
fetch('./assets/data/inversionistasdata')
.then( response => response.json())
.then( data => {
  let arreglo2 = data.inversionistas;
  console.log("ingreso");
  
  for (let objeto of arreglo2) {
    
    let investor:Inversionista = new Inversionista(objeto["Nombre"], objeto['SectorInteres'],objeto["noInversiones"],objeto["TipoFinanciamiento"])
    document.getElementById("tbInvestor").innerHTML+=investor.renderizarPlantilla();
    
  }
}).catch(function(error) {
  console.log('Hubo un problema con la petición Fetch Inversionistas:' + error.message);
});
  }
  
  constructor() { }

  ngOnInit() {
    
}
}
