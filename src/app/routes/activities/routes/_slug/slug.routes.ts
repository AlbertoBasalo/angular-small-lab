import { Route } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';

// * 5️⃣ Complex Example of multi-level ROUTES with a recursive folder structure

export default [
  {
    path: '',
    loadComponent: () => import('./slug.page'),
  },
  {
    path: 'edit',
    canActivate: [AuthGuard],
    loadComponent: () => import('./routes/edit/edit.page'),
  },
] as Route[];
