import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ContactsFormService } from './contacts-form.service';
import { Contacts } from '../contacts.model';

@Component({
  selector: 'contacts-form',
  templateUrl: './contacts-form.component.html',
  providers: [ContactsFormService],
})
export class ContactsFormComponent implements OnInit {
  contactsForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    phoneNo: new FormControl(''),
  });
  heading: string = '';
  private contactId: number | null = null;

  constructor(private contactsFormService: ContactsFormService) {}

  ngOnInit() {
    this.contactsFormService.getRouteData().subscribe((value: any) => {
      if (value['routeType'] === 'add') {
        this.heading = 'Add Contact';
      } else {
        this.heading = 'Edit Contact';
      }
    });

    this.contactsFormService
      .getContact()
      .subscribe((contact: Contacts | undefined) => {
        if (contact) {
          if (contact) {
            this.contactId = contact.id;
            this.contactsForm.patchValue({
              name: contact.name,
              phoneNo: contact.phoneNo,
            });
          }
        }
      });
  }

  onSubmit() {
    const formData = this.contactsForm.value;
    const saveContact: Contacts = {
      id: this.contactId || -1,
      name: formData.name || '',
      phoneNo: formData.phoneNo || '',
    };
    this.contactsFormService.save(saveContact);
  }
}
