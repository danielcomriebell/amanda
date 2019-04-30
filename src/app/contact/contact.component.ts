import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact_info = [
    {
      'name':'Amanda Bell',
      'phone':'555 555 5555',
      'email':'amandabell@gmail.com'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
