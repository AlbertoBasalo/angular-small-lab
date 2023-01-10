import { Route } from '@angular/router';
import { HomePage } from '@routes/home/home.page';

export const APP_ROUTES: Route[] = [
  { path: '', pathMatch: 'full', component: HomePage },
  {
    path: 'about',
    loadComponent: () => import('./routes/about/about.page'),
  },
  {
    path: 'contact',
    loadComponent: () => import('./routes/contact/contact.page'),
  },
  {
    path: 'activities',
    loadChildren: () => import('./routes/activities/activities.routes'),
  },
  {
    path: 'auth',
    loadChildren: () => import('./routes/auth/auth.routes'),
  },
];
