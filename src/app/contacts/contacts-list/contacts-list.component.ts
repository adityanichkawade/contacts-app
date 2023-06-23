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
    this.contactsService
      .getAll()
      .subscribe((contacts: Contacts[]) => (this.contacts = contacts));
  }

  contactTrackBy(index: number, contact: Contacts): number {
    return contact.id;
  }

  onDelete(id: number) {
    this.contactsService.delete(id).subscribe((contact: Contacts) => {
      this.contacts = this.contacts.filter((item: Contacts) => item.id !== id);
    });
  }
}
