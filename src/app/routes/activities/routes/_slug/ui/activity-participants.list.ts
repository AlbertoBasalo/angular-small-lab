import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Participant } from '@routes/activities/routes/_slug/domain/participant.interface';

@Component({
  selector: 'lab-activity-participants-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul>
      <li *ngFor="let participant of participants">
        {{ participant.name }}
      </li>
    </ul>
  `,
  styles: [],
})
export class ActivityParticipantsList {
  @Input() participants: Participant[] = [];
}
