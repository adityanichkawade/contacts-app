import { Component, OnInit } from '@angular/core';
import { Contacts } from '../contacts.model';
import { ContactsDetailService } from './contacts-detail.service';

@Component({
  selector: 'contacts-detail',
  templateUrl: './contacts-detail.component.html',
  providers: [ContactsDetailService],
})
export class ContactsDetailComponent implements OnInit {
  contact: Contacts | undefined;
  constructor(private contactsDetailService: ContactsDetailService) {}

  ngOnInit() {
    this.contactsDetailService.getContact().subscribe((contact: Contacts) => {
      if (!contact) {
        this.contactsDetailService.navigateBack();
      }
      this.contact = contact;
    });
  }

  onBackClick() {
    this.contactsDetailService.navigateBack();
  }

  onEditClick() {
    this.contactsDetailService.navigateToEdit();
  }
}
