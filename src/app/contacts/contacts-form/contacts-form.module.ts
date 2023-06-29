import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactsFormComponent } from './contacts-form.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'edit/:id',
        data: {
          routeType: 'edit',
        },
        component: ContactsFormComponent,
      },
      {
        path: 'add',
        data: {
          routeType: 'add',
        },
        component: ContactsFormComponent,
      },
    ]),
  ],
})
export class ContactsFormModule {}
