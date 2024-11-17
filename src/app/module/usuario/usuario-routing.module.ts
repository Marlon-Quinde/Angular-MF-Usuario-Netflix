import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './pages/list-users/list-users.component';
import { CreateUsersComponent } from './pages/create-users/create-users.component';

const routes: Routes = [
  {
    path: 'lista',
    component: ListUsersComponent,
  },
  {
    path: 'crear',
    component: CreateUsersComponent
  },
  {
    path: '',
    redirectTo: 'lista',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
