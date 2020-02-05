import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  activetab = 'string';

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      /*Responsive Navigation*/
      (<any>$)("#nav-mobile").html((<any>$)("#nav-main").html());
      (<any>$)("#nav-trigger span").on("click", function () {
        if ((<any>$)("nav#nav-mobile ul").hasClass("expanded")) {
          (<any>$)("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
          (<any>$)(this).removeClass("open");
        } else {
          (<any>$)("nav#nav-mobile ul").addClass("expanded").slideDown(250);
          (<any>$)(this).addClass("open");
        }
      });

      (<any>$)("#nav-mobile").html((<any>$)("#nav-main").html());
      (<any>$)("#nav-mobile ul a").on("click", function () {
        if ((<any>$)("nav#nav-mobile ul").hasClass("expanded")) {
          (<any>$)("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
          (<any>$)("#nav-trigger span").removeClass("open");
        }
      });
    });
  }

  getActiveTab(tabname: string) {
    this.activetab = tabname;
  }
}
