import { inject, Injectable } from '@angular/core';
import { UserTokenService } from '@service/user-token.service';
import { ApiService } from 'src/app/service/api.service';
import { UtilsService } from 'src/app/service/utils.service';
import { Activity } from '../domain/activity.interface';

@Injectable()
export class ActivitiesService {
  apiService = inject(ApiService);
  userTokenService = inject(UserTokenService);
  utilsService = inject(UtilsService);
  getActivities$() {
    return this.apiService.getAll$<Activity>('activities');
  }
  save$(activity: Omit<Activity, 'slug' | 'ownerId'>) {
    const slug = this.utilsService.slugify(activity.title || '');
    const userId = this.userTokenService.getUserId();
    if (userId === 0) throw new Error('userId is undefined');
    const newActivity: Activity = {
      userId,
      slug,
      ...activity,
    };
    return this.apiService.post$<Activity, Activity>('activities', newActivity);
  }
  getBySlug$(slug: string) {
    return this.apiService.getByQuery$<Activity[]>(
      'activities',
      `slug=${slug}`
    );
  }
  update$(activity: Activity) {
    console.log('update$', activity);
    return this.apiService.put$<Activity>('activities', activity.id!, activity);
  }
}
