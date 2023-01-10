import { Route } from '@angular/router';
import { authGuard } from '@router/auth/router/auth.guard';

export const ACTIVITIES_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () => import('./router/activities.page'),
  },
  {
    path: 'create',
    canActivate: [authGuard],
    loadComponent: () => import('./router/activity-create.page'),
  },
  {
    path: ':slug',
    loadComponent: () => import('./router/activity-details.page'),
  },
  {
    path: ':slug/update',
    canActivate: [authGuard],
    loadComponent: () => import('./router/activity-update.page'),
  },
];

export default ACTIVITIES_ROUTES;
