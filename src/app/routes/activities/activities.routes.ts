import { Route } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';

export const ACTIVITIES_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () => import('./routes/activities.page'),
  },
  {
    path: 'create',
    canActivate: [AuthGuard],
    loadComponent: () => import('./routes/activity-create.page'),
  },
  {
    path: ':slug',
    loadComponent: () => import('./routes/activity-details.page'),
  },
  {
    path: ':slug/update',
    canActivate: [AuthGuard],
    loadComponent: () => import('./routes/activity-update.page'),
  },
];

export default ACTIVITIES_ROUTES;
