import { Route } from '@angular/router';
import { authGuard } from './routes/auth/routes/auth.guard';
import { HomePage } from './routes/home/home.page';

export const APP_ROUTES: Route[] = [
  { path: '', pathMatch: 'full', component: HomePage },
  {
    path: 'about',
    loadComponent: () => import('./routes/about/about.page'),
  },
  {
    path: 'admin',
    canActivate: [authGuard],
    loadComponent: () => import('./routes/admin/admin.page'),
  },
  {
    path: 'contact',
    loadComponent: () => import('./routes/contact/contact.page'),
  },
  {
    path: 'activities',
    loadChildren: () =>
      import('./routes/activities/activities.routes').then(
        (m) => m.ACTIVITIES_ROUTES
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./routes/auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
];
