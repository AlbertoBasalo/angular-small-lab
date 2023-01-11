import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Participant } from '@routes/activities/routes/_slug/domain/participant.interface';
import { ActivityParticipantsService } from '@routes/activities/routes/_slug/service/activity-participants.service';
import { InstrumentationService } from '@service/instrumentation.service';
import { UtilsService } from '@service/utils.service';
import { Activity } from '../../domain/activity.interface';
import { ActivitiesService } from '../../service/activities.service';
import { ActivityParticipantForm } from './ui/activity-participant.form';
import { ActivityView } from './ui/activity.view';

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
export default class SlugPage implements OnInit {
  instrumentationService = inject(InstrumentationService);
  activatedRoute = inject(ActivatedRoute);
  activitiesService = inject(ActivitiesService);
  activityParticipantsService = inject(ActivityParticipantsService);
  utils = inject(UtilsService);
  slug = this.utils.getParam(this.activatedRoute, 'slug');
  activity!: Activity;
  ngOnInit() {
    this.activitiesService.getBySlug$(this.slug).subscribe((activities) => {
      this.activity = activities[0];
    });
  }
  onAddParticipant(participant: Partial<Participant>) {
    try {
      this.activityParticipantsService.addParticipant(
        this.activity,
        participant
      );
    } catch (error) {
      this.instrumentationService.notifyWarning(error);
    }
  }
}
