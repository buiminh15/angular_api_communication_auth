import { Contact } from './../shared/contact.model';
import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input() contact: Contact

  @HostBinding('class') columnClass = 'four wide column'
  constructor() { }

  ngOnInit() {
  }

}
