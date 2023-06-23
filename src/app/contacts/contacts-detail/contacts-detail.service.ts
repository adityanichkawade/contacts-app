import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contacts } from '../contacts.model';
import { Observable } from 'rxjs';

@Injectable()
export class ContactsDetailService {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private contactsService: ContactsService
  ) {}

  getContact(): Observable<Contacts> {
    const routeId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    return this.contactsService.get(routeId);
  }

  navigateBack() {
    this.router.navigateByUrl('/');
  }

  navigateToEdit() {
    const routeId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.router.navigateByUrl(`/edit/${routeId}`);
  }
}
