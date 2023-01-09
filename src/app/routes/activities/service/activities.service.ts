import { inject, Injectable } from '@angular/core';
import { AuthService } from '@routes/auth/service/auth.service';
import { ApiService } from 'src/app/service/api.service';
import { UtilsService } from 'src/app/service/utils.service';
import { Activity } from '../domain/activity.interface';

@Injectable({
  providedIn: 'root',
})
export class ActivitiesService {
  apiService = inject(ApiService);
  authService = inject(AuthService);
  utilsService = inject(UtilsService);
  getActivities$() {
    return this.apiService.getAll$<Activity>('activities');
  }
  save(activity: Omit<Activity, 'slug' | 'ownerId'>) {
    const slug = this.utilsService.slugify(activity.title || '');
    const userId = this.authService.getUserId();
    const newActivity: Activity = {
      userId,
      slug,
      ...activity,
    };
    return this.apiService.post$<Activity, Activity>('activities', newActivity);
  }
  getBySlug(slug: string) {
    return this.apiService.getByQuery$<Activity[]>(
      'activities',
      `slug=${slug}`
    );
  }
}
