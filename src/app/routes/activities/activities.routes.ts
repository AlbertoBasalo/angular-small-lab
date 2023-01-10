import { Route } from '@angular/router';
import { ActivitiesService } from '@routes/activities/service/activities.service';
import { AuthGuard } from 'src/app/auth.guard';

// * 5️⃣ Complex Example of multi-level ROUTES with a recursive folder structure,
// * using same scoped instance of service

export default [
  {
    path: '',
    providers: [ActivitiesService],
    children: [
      {
        path: '',
        loadComponent: () => import('./activities.page'),
      },
      {
        path: 'create',
        canActivate: [AuthGuard],
        loadComponent: () => import('./routes/create/activity-create.page'),
      },
      {
        path: ':slug',
        loadChildren: () => import('./routes/_slug/slug.routes'),
      },
    ],
  },
] as Route[];
// ! exports default as typed const
