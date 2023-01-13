import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Participant } from '@routes/activities/routes/_slug/domain/participant.interface';

@Component({
  selector: 'lab-activity-participants-list',
  standalone: true,
  imports: [NgIf, NgFor],
  template: `
    <article *ngIf="participants.length > 0; else noParticipants">
      <header>
        <h3>{{ participants.length }} Participants</h3>
      </header>
      <ul>
        <li *ngFor="let participant of participants">
          <span>{{ participant.name }}</span>
          <span>📧 {{ participant.email }}</span>
          <span>📱 {{ participant.phone }}</span>
          <span>🏡 {{ participant.address }}</span>
          <span>💱 {{ participant.paymentMethod }}</span>
        </li>
      </ul>
    </article>
    <ng-template #noParticipants>
      <strong> 🤔 No participants yet.</strong>
    </ng-template>
  `,
  styles: [],
})
export class ActivityParticipantsList {
  @Input() participants: Participant[] = [];
}
