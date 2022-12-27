import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ActivitiesService } from './activities.service';
import { ActivityForm } from './activity.form';
import { Activity } from './activity.interface';

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
