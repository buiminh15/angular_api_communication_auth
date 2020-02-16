import { Component, OnInit } from '@angular/core';
import {Contact} from '../shared/contact.model'
import {Http, Response} from '@angular/http'
import 'rxjs/add/operator/map'
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[]
  constructor(public http: Http) { }

  ngOnInit() {
    this.http.get('/api/contacts').map((res: Response)=>
     res.json()).subscribe(data => {
       this.contacts = data
       console.log(this.contacts)  
      })
  }

}
