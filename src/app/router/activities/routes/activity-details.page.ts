import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivityParticipantForm } from '@router/activities/ui/activity-participant.form';
import { UtilsService } from '@service/utils.service';
import { Activity } from '../domain/activity.interface';
import { ActivitiesService } from '../service/activities.service';
import { ActivityView } from '../ui/activity.view';

@Component({
  standalone: true,
  imports: [ActivityView, ActivityParticipantForm],
  template: `
    <lab-activity-view [activity]="activity"></lab-activity-view>
    <lab-activity-participant-form (addParticipant)="onAddParticipant($event)">
    </lab-activity-participant-form>
  `,
  styles: [],
})
export default class ActivityDetailsPage implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  service = inject(ActivitiesService);
  utils = inject(UtilsService);
  slug = this.utils.getParam(this.activatedRoute, 'slug');
  activity!: Activity;
  ngOnInit() {
    this.service.getBySlug$(this.slug).subscribe((activities) => {
      this.activity = activities[0];
    });
  }
  onAddParticipant(participant: any) {
    console.log('submitted', participant);
  }
}
