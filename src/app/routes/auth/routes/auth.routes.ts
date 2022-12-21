import { Route } from '@angular/router';

export const AUTH_ROUTES: Route[] = [
  { path: 'login', loadComponent: () => import('./login.page') },
  { path: 'register', loadComponent: () => import('./register.page') },
  { path: '**', redirectTo: 'login' },
];
