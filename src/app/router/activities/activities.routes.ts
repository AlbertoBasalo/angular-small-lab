import { Route } from '@angular/router';
import { authGuard } from '@router/auth/auth.guard';

export const ACTIVITIES_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () => import('./routes/activities.page'),
  },
  {
    path: 'create',
    canActivate: [authGuard],
    loadComponent: () => import('./routes/activity-create.page'),
  },
  {
    path: ':slug',
    loadComponent: () => import('./routes/activity-details.page'),
  },
  {
    path: ':slug/update',
    canActivate: [authGuard],
    loadComponent: () => import('./routes/activity-update.page'),
  },
];

export default ACTIVITIES_ROUTES;
