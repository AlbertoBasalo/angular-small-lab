import { Route } from '@angular/router';
import { HomePage } from '@router/home/home.page';

export const APP_ROUTES: Route[] = [
  { path: '', pathMatch: 'full', component: HomePage },
  {
    path: 'about',
    loadComponent: () => import('./router/about/about.page'),
  },
  {
    path: 'contact',
    loadComponent: () => import('./router/contact/contact.page'),
  },
  {
    path: 'activities',
    loadChildren: () => import('./router/activities/activities.routes'),
  },
  {
    path: 'auth',
    loadChildren: () => import('./router/auth/auth.routes'),
  },
];
