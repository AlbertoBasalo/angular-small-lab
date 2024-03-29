import { inject, Injectable } from '@angular/core';
import { Activity } from '@routes/activities/domain/activity.interface';
import { Participant } from '@routes/activities/routes/_slug/domain/participant.interface';
import { ApiService } from '@service/api.service';
import { UserTokenService } from '@service/user-token.service';

@Injectable()
export class ActivityParticipantsService {
  apiService = inject(ApiService);
  userTokenService = inject(UserTokenService);

  addParticipant(activity: Activity, participant: Partial<Participant>) {
    if (activity.id === undefined) throw new Error('activity.id is undefined');
    const activityId = activity.id;
    if (activity.currentParticipants === activity.maxParticipants)
      throw new Error('activity is full');
    const userId = this.userTokenService.getUserId();
    if (userId === 0) throw new Error('userId is undefined');
    const newParticipant: Partial<Participant> = {
      activityId,
      userId,
      ...participant,
    };
    this.apiService
      .post$<Participant, Partial<Participant>>('participants', newParticipant)
      .subscribe(() => {
        activity.currentParticipants = activity.currentParticipants + 1;
        console.log(activity);
        this.apiService
          .put$<Activity>('activities', activityId, activity)
          .subscribe();
      });
  }

  cancelParticipant(activity: Activity) {
    if (activity.id === undefined) throw new Error('activity.id is undefined');
    const activityId = activity.id;
    const userId = this.userTokenService.getUserId();
    if (userId === 0) throw new Error('userId is undefined');
    this.apiService
      .delete$<Participant>('participants', activityId)
      .subscribe(() => {
        activity.currentParticipants = activity.currentParticipants - 1;
        this.apiService
          .put$<Activity>('activities', activityId, activity)
          .subscribe();
      });
  }

  getByActivityId$(activityId: number | undefined) {
    if (activityId === undefined) throw new Error('activity.id is undefined');
    return this.apiService.getByQuery$<Participant[]>(
      'participants',
      'activityId=' + activityId
    );
  }
}
