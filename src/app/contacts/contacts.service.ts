import { Inject } from '@angular/core';
import { Contacts } from './contacts.model';
import { CONTACTS } from './mock.contacts';

@Inject({})
export class ContactsService {
  private contacts: Contacts[] = CONTACTS;

  getAll(): Contacts[] {
    return this.contacts;
  }

  get(id: number): Contacts | undefined {
    return this.contacts.find((contact: Contacts) => contact.id === id);
  }

  save(contact: Contacts): boolean {
    let status = false;
    if (contact.id !== -1) {
      this.contacts = this.contacts.map((item: Contacts) =>
        item.id === contact.id ? contact : item
      );
      status = true;
    } else {
      this.contacts.push({ ...contact, id: Date.now() % 1000 });
      status = true;
    }
    return status;
  }
}
