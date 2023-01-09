import { Route } from '@angular/router';

export const ACTIVITIES_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () => import('./router/activities.page'),
  },
  {
    path: 'create',
    loadComponent: () => import('./router/activity-create.page'),
  },
  {
    path: ':slug',
    loadComponent: () => import('./router/activity-details.page'),
  },
  {
    path: ':slug/update',
    loadComponent: () => import('./router/activity-update.page'),
  },
];

export default ACTIVITIES_ROUTES;
