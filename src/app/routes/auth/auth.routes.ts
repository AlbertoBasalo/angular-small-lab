import { Route } from '@angular/router';

// * 4️⃣ Example of multi-level ROUTES using the same service, domain and ui

export const AUTH_ROUTES: Route[] = [
  { path: 'login', loadComponent: () => import('./routes/login.page') },
  { path: 'register', loadComponent: () => import('./routes/register.page') },
  { path: '**', redirectTo: 'login' },
];

export default AUTH_ROUTES;
