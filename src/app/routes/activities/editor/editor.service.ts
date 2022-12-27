import { inject, Injectable } from '@angular/core';
import { AuthService } from '@routes/auth/services/auth.service';
import { ApiService } from '@srv/api.service';
import { Activity } from '../activity.interface';

@Injectable({
  providedIn: 'root',
})
export class EditorService {
  authService = inject(AuthService);
  apiService = inject(ApiService);
  save(activity: Omit<Activity, 'slug' | 'ownerId'>) {
    const slug = this.slugify(activity.title || '');
    const ownerId = this.authService.userToken.user.id.toString();
    const newActivity: Activity = {
      slug,
      ownerId,
      ...activity,
    };
    return this.apiService.postActivity$(newActivity);
  }

  slugify(original: string) {
    return original
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
}
