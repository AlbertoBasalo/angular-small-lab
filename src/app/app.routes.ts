import { Route } from '@angular/router';
import { HomePage } from './routes/home/home.page';

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: HomePage },
];
