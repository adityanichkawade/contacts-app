import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contacts } from '../contacts.model';

@Injectable()
export class ContactsFormService {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private contactsService: ContactsService
  ) {}

  getRouteData() {
    return this.activatedRoute.data;
  }

  getContact() {
    const contactId = this.activatedRoute.snapshot.paramMap.get('id');
    if (contactId) {
      return this.contactsService.get(Number(contactId));
    }
    return null;
  }

  save(contact: Contacts) {
    this.contactsService.save(contact);
    this.router.navigateByUrl('/');
  }
}
