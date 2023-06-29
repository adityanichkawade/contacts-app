import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactsDetailComponent } from './contacts-detail.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: ':id',
        component: ContactsDetailComponent,
      },
    ]),
  ],
})
export class ContactsDetailModule {}
