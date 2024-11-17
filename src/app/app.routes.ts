import { Routes } from '@angular/router';
import { HomeComponent } from './module/home/home.component';

export const routes: Routes = [
  {
    path: 'usuario',
    loadChildren: () => import('./module/usuario/usuario.module').then((m) => m.UsuarioModule)
  },
  {
    path: '',
    redirectTo: 'usuario',
    pathMatch: 'full'
  }
];
