import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activity } from '@routes/activities/domain/activity.interface';
import { ActivityForm } from '@routes/activities/routes/create/activity.form';
import { ActivitiesService } from '@routes/activities/service/activities.service';
import { InstrumentationService } from '@service/instrumentation.service';
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
  instrumentationService = inject(InstrumentationService);
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
    if (this.isBeingCancelled(activityUpdates)) {
      this.askForConfirmation(activityUpdates);
    } else {
      this.updateActivity(activityUpdates);
    }
  }

  private askForConfirmation(activityUpdates: Activity) {
    this.instrumentationService
      .notifyQuestion$(
        'Cannot be undone. Are you sure you want to cancel this activity?',
        'Activity cancellation'
      )
      .subscribe((response) => {
        if (response === 'confirm') {
          this.updateActivity(activityUpdates);
        }
      });
  }

  private updateActivity(activityUpdates: Activity) {
    const activity = { ...this.activity, ...activityUpdates };
    this.activitiesService
      .update$(activity)
      .subscribe((activity) =>
        this.router.navigate(['/activities', activity.slug])
      );
  }

  private isBeingCancelled(activityUpdates: Activity) {
    console.log(activityUpdates.status, this.activity.status);
    return (
      activityUpdates.status === 'cancelled' &&
      this.activity.status !== 'cancelled'
    );
  }
}
