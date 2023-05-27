import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contacts } from '../contacts.model';

@Injectable()
export class ContactsDetailService {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private contactsService: ContactsService
  ) {}

  getContact(): Contacts | undefined {
    const routeId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    const contact = this.contactsService.get(routeId);
    return contact;
  }

  navigateBack() {
    this.router.navigateByUrl('/');
  }

  navigateToEdit() {
    const routeId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.router.navigateByUrl(`/edit/${routeId}`);
  }
}
