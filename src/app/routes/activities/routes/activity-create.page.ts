import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityForm } from '../interface/activity.form';
import { ActivitiesService } from '../services/activities.service';
import { Activity } from '../services/activity.interface';

@Component({
  standalone: true,
  imports: [ActivityForm],
  template: ` <lab-activity-form (save)="onSave($event)"></lab-activity-form> `,
  styles: [],
})
export default class ActivityCreatePage {
  service = inject(ActivitiesService);
  router = inject(Router);
  onSave(activity: Activity) {
    this.service
      .save(activity)
      .subscribe((activity) =>
        this.router.navigate(['/activities', activity.slug])
      );
  }
}
