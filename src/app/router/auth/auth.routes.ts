import { Route } from '@angular/router';

export const AUTH_ROUTES: Route[] = [
  { path: 'login', loadComponent: () => import('./routes/login.page') },
  { path: 'register', loadComponent: () => import('./routes/register.page') },
  { path: '**', redirectTo: 'login' },
];

export default AUTH_ROUTES;
