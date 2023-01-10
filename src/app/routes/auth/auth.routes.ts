import { Route } from '@angular/router';
import { AuthService } from '@routes/auth/service/auth.service';

// * 4️⃣ Example of multi-level ROUTES using the same domain, ui and a scoped instance of service,

export const AUTH_ROUTES: Route[] = [
  {
    path: '',
    providers: [AuthService],
    children: [
      {
        path: 'login',
        loadComponent: () => import('./routes/login/login.page'),
      },
      {
        path: 'register',
        loadComponent: () => import('./routes/register/register.page'),
      },
      { path: '**', redirectTo: 'login' },
    ],
  },
];
// ! Exporting named const
export default AUTH_ROUTES;
