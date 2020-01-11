import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  header = {
    heading: 'Startelp',
    headingtext: 'Vinculando ideas innovadoras con capital inteligente',
    buttontext: 'Startup',
    buttonlink: "\Login",
    buttontext2: 'Inversionista',
    buttonlink2: "\Login"
  };
  constructor() { }

  ngOnInit() {
  }

}
