import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contacts } from '../contacts.model';
import { Observable } from 'rxjs';

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

  getContact(): Observable<Contacts> {
    const contactId = this.activatedRoute.snapshot.paramMap.get('id');
    return this.contactsService.get(Number(contactId));
  }

  save(contact: Contacts) {
    this.contactsService.save(contact).subscribe((contact: Contacts) => {
      this.router.navigateByUrl('/');
    });
  }
}
