import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss']
})
export class EstadisticasComponent implements OnInit {
  title = 'Categorias de Emprendimientos, 2019';
   type = 'ColumnChart';
   data = [
      ['Alimentacion', 45.0,'silver'],
      ['Salud', 26.8,'gold'],
      ['Eventos', 12.8,'#e5e4e2'],
      ['Tecnologia', 45.5,'silver'],
      ['Educacion', 6.2,'gold'],
      ['Others', 0.7,'#e5e4e2'] 
   ];
   columnNames = ['Browser','Percent',{role: 'style'}];
   options = {legend: { position: "none" }
   };
  //  width = 750;
  //  height = 600;
  // public nameBar = '/app/assets/data/sectorCatTotal.csv'
  // public csvFile:CsvFile;
  public dataBar:any;
  
  
 
/**FUNCION PARA CARGAR DATOS BARRA */
processData3(allText) {
  var allTextLines = allText.split(/\r\n|\n/);
  var headers = allTextLines[0].split(',');
  var lines = [];
  lines.push(headers)
  for (var i = 1; i < allTextLines.length; i++) {
    var data = allTextLines[i].split(',');
    if (data.length == headers.length) {
      data[1] = parseInt(data[1]);
      data[2] = parseInt(data[2]);
      data[3] = parseInt(data[3]);
      data[4] = parseInt(data[4]);
      data[5] = parseInt(data[5]);
      lines.push(data)
    }
  }
  console.log(lines);
  return lines;
}
 

  ngOnInit() {
  }

}
