import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login2',
    pathMatch: 'full'
  },
  {
    path: 'login2',
    loadComponent: () => import('./pages/login2/login2.page').then(m => m.Login2Page)
  },
  {
    path: 'home2',
    loadComponent: () => import('./pages/home2/home2.page').then(m => m.Home2Page)
  },
  {
    path: 'catalog',
    loadComponent: () => import('./pages/catalog/catalog.page').then(m => m.CatalogPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.page').then(m => m.ProfilePage)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then(m => m.RegisterPage)
  },
  {
    path: '**',
    redirectTo: 'login2'
  }
];
