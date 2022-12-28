import { Route } from '@angular/router';

export const ACTIVITIES_ROUTES: Route[] = [
  {
    path: 'create',
    loadComponent: () => import('./routes/activity-create.page'),
  },
  {
    path: ':slug',
    loadComponent: () => import('./routes/activity.page'),
  },
];
