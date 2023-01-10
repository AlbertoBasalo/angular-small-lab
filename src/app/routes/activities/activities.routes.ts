import { Route } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';

// * 5️⃣ Complex Example of multi-level ROUTES with a recursive folder structure

export const ACTIVITIES_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () => import('./routes/activities.page'),
  },
  {
    path: 'create',
    canActivate: [AuthGuard],
    loadComponent: () => import('./routes/create/activity-create.page'),
  },
  {
    path: ':slug',
    loadComponent: () => import('./routes/details/activity-details.page'),
  },
  {
    path: ':slug/edit',
    canActivate: [AuthGuard],
    loadComponent: () => import('./routes/details/edit/activity-update.page'),
  },
];

export default ACTIVITIES_ROUTES;
