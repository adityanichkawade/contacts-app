import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./contacts-list/contacts-list.module').then(
        (m) => m.ContactsListModule
      ),
  },
  {
    path: 'detail',
    loadChildren: () =>
      import('./contacts-detail/contacts-detail.module').then(
        (m) => m.ContactsDetailModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./contacts-form/contacts-form.module').then(
        (m) => m.ContactsFormModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ContactsRoutingModule {}
