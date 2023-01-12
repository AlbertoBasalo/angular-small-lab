import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activity } from '@routes/activities/domain/activity.interface';
import { ActivityForm } from '@routes/activities/routes/create/activity.form';
import { ActivitiesService } from '@routes/activities/service/activities.service';
import { UtilsService } from '@service/utils.service';

@Component({
  standalone: true,
  imports: [ActivityForm],
  template: ` <lab-activity-form [activity]="activity" (save)="onSave($event)"/> `,
  styles: [],
})
export default class EditPage implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  activitiesService = inject(ActivitiesService);
  utils = inject(UtilsService);
  router = inject(Router);
  slug = this.utils.getParam(this.activatedRoute, 'slug');
  activity!: Activity;
  ngOnInit() {
    console.log(this.slug);
    this.activitiesService.getBySlug$(this.slug).subscribe((activities) => {
      this.activity = activities[0];
    });
  }
  onSave(activityUpdates: Activity) {
    const activity = { ...this.activity, ...activityUpdates };
    this.activitiesService
      .update$(activity)
      .subscribe((activity) =>
        this.router.navigate(['/activities', activity.slug])
      );
  }
}
