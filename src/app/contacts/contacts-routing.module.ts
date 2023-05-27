import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { ContactsFormComponent } from './contacts-form/contacts-form.component';

const routes: Routes = [
  {
    path: '',
    component: ContactsListComponent,
  },
  {
    path: 'detail/:id',
    component: ContactsDetailComponent,
  },
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ContactsRoutingModule {}
