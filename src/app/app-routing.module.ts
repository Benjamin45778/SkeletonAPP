import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login2', pathMatch: 'full' },

  {
    path: 'login2',
    loadChildren: () =>
      import('./pages/login2/login2.module').then((m) => m.Login2PageModule),
  },

  {
    path: 'home2',
    loadChildren: () =>
      import('./pages/home2/home2.module').then((m) => m.Home2PageModule),
  },

  { path: '**', redirectTo: 'login2' },
];
