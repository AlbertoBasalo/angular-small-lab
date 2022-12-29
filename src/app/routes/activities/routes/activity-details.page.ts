import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivityParticipantForm } from '@routes/activities/ui/activity-participant.form';
import { ActivitiesService } from '../services/activities.service';
import { Activity } from '../services/activity.interface';
import { ActivityView } from '../ui/activity.view';

@Component({
  standalone: true,
  imports: [ActivityView, ActivityParticipantForm],
  template: `<lab-activity-view [activity]="activity"></lab-activity-view>
    <lab-activity-participant-form
      (submit)="onSubmit($event)"
    ></lab-activity-participant-form>`,
  styles: [],
})
export default class ActivityDetailsPage implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  service = inject(ActivitiesService);
  slug = this.activatedRoute.snapshot.paramMap.get('slug') || '';
  activity!: Activity;
  ngOnInit() {
    this.service.getBySlug(this.slug).subscribe((activities) => {
      const activity = activities[0];
      this.activity = activity;
    });
  }
  onSubmit(participant: any) {
    console.log('submitted', participant);
  }
}
