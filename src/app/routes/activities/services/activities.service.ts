import { inject, Injectable } from '@angular/core';
import { AuthService } from '@routes/auth/services/auth.service';
import { ApiService } from '@srv/api.service';
import { UtilsService } from '@srv/utils.service';
import { Activity } from './activity.interface';

@Injectable({
  providedIn: 'root',
})
export class ActivitiesService {
  apiService = inject(ApiService);
  authService = inject(AuthService);
  utilsService = inject(UtilsService);
  save(activity: Omit<Activity, 'slug' | 'ownerId'>) {
    const slug = this.utilsService.slugify(activity.title || '');
    const userId = this.authService.userToken.user.id;
    const newActivity: Activity = {
      userId,
      slug,
      ...activity,
    };
    return this.apiService.post$<Activity>('activities', newActivity);
  }
  getBySlug(slug: string) {
    return this.apiService.getByQuery$<Activity[]>(
      'activities',
      `slug=${slug}`
    );
  }
}
