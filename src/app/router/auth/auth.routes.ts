import { Route } from '@angular/router';

export const AUTH_ROUTES: Route[] = [
  { path: 'login', loadComponent: () => import('./router/login.page') },
  { path: 'register', loadComponent: () => import('./router/register.page') },
  { path: '**', redirectTo: 'login' },
];

export default AUTH_ROUTES;
