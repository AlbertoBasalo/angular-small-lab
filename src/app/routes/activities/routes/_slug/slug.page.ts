import { NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Participant } from '@routes/activities/routes/_slug/domain/participant.interface';
import { ActivityParticipantsService } from '@routes/activities/routes/_slug/service/activity-participants.service';
import { ActivityParticipantCancellationForm } from '@routes/activities/routes/_slug/ui/activity-participant-cancellation.form';
import { ActivityParticipantsList } from '@routes/activities/routes/_slug/ui/activity-participants.list';
import { InstrumentationService } from '@service/instrumentation.service';
import { UserTokenService } from '@service/user-token.service';
import { UtilsService } from '@service/utils.service';
import { Activity } from '../../domain/activity.interface';
import { ActivitiesService } from '../../service/activities.service';
import { ActivityParticipantForm } from './ui/activity-participant.form';
import { ActivityView } from './ui/activity.view';

// * 6️⃣ Complex Example of a Page with several Components and error handling

@Component({
  standalone: true,
  imports: [
    NgIf,
    ActivityView,
    ActivityParticipantForm,
    ActivityParticipantCancellationForm,
    ActivityParticipantsList,
  ],
  template: `
    <lab-activity-view [activity]="activity"/>
    <lab-activity-participants-list *ngIf="isOwner" [participants]="participants"/>
    <lab-activity-participant-cancellation-form *ngIf="isParticipant" (cancelParticipant)="onCancelParticipant()"/>
    <lab-activity-participant-form *ngIf="isVisitor" (addParticipant)="onAddParticipant($event)"/>

  `,
  styles: [],
})
export default class SlugPage implements OnInit {
  instrumentationService = inject(InstrumentationService);
  activatedRoute = inject(ActivatedRoute);
  activitiesService = inject(ActivitiesService);
  activityParticipantsService = inject(ActivityParticipantsService);
  utils = inject(UtilsService);
  userTokenService = inject(UserTokenService);
  userId = this.userTokenService.getUserId();
  participants: Participant[] = [];
  isOwner = false;
  isParticipant = false;
  isVisitor = true;
  slug = this.utils.getParam(this.activatedRoute, 'slug');
  activity!: Activity;
  ngOnInit() {
    this.activitiesService.getBySlug$(this.slug).subscribe((activities) => {
      this.activity = activities[0];
      this.isOwner = this.activity.userId === this.userId;
      this.isVisitor = !this.isOwner;
      this.activityParticipantsService
        .getByActivityId$(this.activity.id)
        .subscribe((participants) => {
          this.participants = participants;
          this.isParticipant = this.participants.some(
            (p) => p.userId === this.userId
          );
          this.isVisitor = !this.isParticipant && !this.isOwner;
        });
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
  onCancelParticipant() {
    this.instrumentationService
      .notifyQuestion$('Are you sure you want to cancel your participation?')
      .subscribe((response) => {
        if (response === 'confirm') {
          this.activityParticipantsService.cancelParticipant(this.activity);
        }
      });
  }
}
