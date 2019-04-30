import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  openMenu:boolean=false;
  menuItems:Array<any> = [
    {
      "title":'home',
      "url":'home'
    },
    {
      "title":'about',
      "url":'about'
    },
    {
      "title":'rates',
      "url":'rates'
    },
    {
      "title":'contact',
      "url":'contact'
    },
  ]

  constructor() { }

  initSlide(){
    this.openMenu = !this.openMenu;
  }

  ngOnInit() {
  }

}
