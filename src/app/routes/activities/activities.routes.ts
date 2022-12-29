import { Route } from '@angular/router';

export const ACTIVITIES_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () => import('./routes/activities.page'),
  },
  {
    path: 'create',
    loadComponent: () => import('./routes/activity-create.page'),
  },
  {
    path: ':slug',
    loadComponent: () => import('./routes/activity-details.page'),
  },
  {
    path: ':slug/update',
    loadComponent: () => import('./routes/activity-update.page'),
  },
];
