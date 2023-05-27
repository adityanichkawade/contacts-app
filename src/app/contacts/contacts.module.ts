import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsService } from './contacts.service';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsComponent } from './contacts.component';
import { ContactsFormComponent } from './contacts-form/contacts-form.component';

@NgModule({
  declarations: [
    ContactsComponent,
    ContactsListComponent,
    ContactsFormComponent,
  ],
  providers: [ContactsService],
  imports: [ContactsRoutingModule, CommonModule, ReactiveFormsModule],
  exports: [ContactsComponent],
})
export class ContactsModule {}
