import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Contacts } from '../contacts.model';

@Component({
  selector: 'contacts-list',
  templateUrl: './contacts-list.component.html',
})
export class ContactsListComponent implements OnInit {
  contacts: Contacts[] = [];
  constructor(private contactsService: ContactsService) {}

  ngOnInit() {
    this.contacts = this.contactsService.getAll();
  }

  contactTrackBy(index: number, contact: Contacts): number {
    return contact.id;
  }
}
