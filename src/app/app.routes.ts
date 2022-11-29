import { Route } from '@angular/router';
import { HomePage } from './routes/home/home.page';

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: HomePage },
  {
    path: 'about',
    loadComponent: () => import('./routes/about/about.page'),
  },
  {
    path: 'contact',
    loadComponent: () => import('./routes/contact/contact.page'),
  },
];
