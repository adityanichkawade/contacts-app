import { Inject } from '@angular/core';
import { Contacts } from './contacts.model';
import { CONTACTS } from './mock.contacts';
import { Observable, Subscriber } from 'rxjs';

@Inject({})
export class ContactsService {
  private contacts: Contacts[] = CONTACTS;

  getAll(): Observable<Contacts[]> {
    return new Observable((subscriber: Subscriber<Contacts[]>) => {
      subscriber.next(this.contacts);
    });
  }

  get(id: number): Observable<Contacts> {
    return new Observable((subscriber: Subscriber<Contacts>) => {
      subscriber.next(
        this.contacts.find((contact: Contacts) => contact.id === id)
      );
    });
  }

  save(contact: Contacts): Observable<Contacts> {
    return new Observable((subscriber: Subscriber<Contacts>) => {
      if (contact.id !== -1) {
        this.contacts = this.contacts.map((item: Contacts) =>
          item.id === contact.id ? contact : item
        );
        subscriber.next(
          this.contacts.find((item: Contacts) => item.id == contact.id)
        );
      } else {
        const newIndex: number = this.contacts.push({
          ...contact,
          id: Date.now() % 1000,
        });
        subscriber.next(this.contacts[newIndex]);
      }
    });
  }

  delete(id: number): Observable<Contacts> {
    return new Observable((subscriber: Subscriber<Contacts>) => {
      const deletedContact = this.contacts.find(
        (item: Contacts) => item.id === id
      );
      this.contacts = this.contacts.filter((item: Contacts) => item.id !== id);
      subscriber.next(deletedContact);
    });
  }
}
