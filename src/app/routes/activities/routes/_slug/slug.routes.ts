import { Route } from '@angular/router';
import { ActivityParticipantsService } from '@routes/activities/routes/_slug/service/activity-participants.service';
import { AuthGuard } from 'src/app/auth.guard';

// * 5️⃣ Complex Example of multi-level ROUTES with a recursive folder structure

export default [
  {
    path: '',
    providers: [ActivityParticipantsService],
    loadComponent: () => import('./slug.page'),
  },
  {
    path: 'edit',
    canActivate: [AuthGuard],
    loadComponent: () => import('./routes/edit/edit.page'),
  },
] as Route[];
