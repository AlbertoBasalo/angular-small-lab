import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Activity } from '../domain/activity.interface';
import { ActivitiesService } from '../service/activities.service';
import { ActivityForm } from '../ui/activity.form';

@Component({
  standalone: true,
  imports: [ActivityForm],
  template: `<lab-activity-form (save)="onSave($event)"></lab-activity-form>`,
  styles: [],
})
export default class ActivityCreatePage {
  service = inject(ActivitiesService);
  router = inject(Router);
  onSave(activity: Activity) {
    this.service
      .save$(activity)
      .subscribe((activity) =>
        this.router.navigate(['/activities', activity.slug])
      );
  }
}
