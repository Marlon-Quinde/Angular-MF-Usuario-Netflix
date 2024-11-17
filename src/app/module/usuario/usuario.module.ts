import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { ListUsersComponent } from './pages/list-users/list-users.component';
import { CreateUsersComponent } from './pages/create-users/create-users.component';
import { FormUsersComponent } from './components/form-users/form-users.component';
import { UsersService } from './services/users.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    ListUsersComponent,
    CreateUsersComponent,
    FormUsersComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,

    SharedModule,
  ],
  providers: [
    UsersService,
    provideHttpClient(withInterceptorsFromDi()) // Nueva configuración
  ],
})
export class UsuarioModule { }
