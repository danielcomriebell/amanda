import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeImages:Array<any> = [
    {
      "title":'../assets/1.jpg',
      "url":'home'
    },
    {
      "title":'../assets/2.jpg',
      "url":'about'
    },
    {
      "title":'../assets/3.jpg',
      "url":'rates'
    },
    {
      "title":'../assets/4.jpg',
      "url":'contact'
    },
    {
      "title":'../assets/5.jpg',
      "url":'contact'
    },
    {
      "title":'../assets/6.jpg',
      "url":'contact'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
