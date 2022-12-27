import { inject, Injectable } from '@angular/core';
import { RestService } from '@srv/rest.service';
import { UtilsService } from '@srv/utils.service';
import { map } from 'rxjs';
import { Activity } from './activity.interface';

@Injectable({
  providedIn: 'root',
})
export class ActivitiesService {
  restService = new RestService<Activity>('activities');
  utilsService = inject(UtilsService);
  save(activity: Omit<Activity, 'slug' | 'ownerId'>) {
    const slug = this.utilsService.slugify(activity.title || '');
    const newActivity: Activity = {
      slug,
      ...activity,
    };
    return this.restService.post$(newActivity);
  }
  getBySlug(slug: string) {
    return this.restService
      .getByQuery$(`slug=${slug}`)
      .pipe(map((activities) => activities[0]));
  }
}
