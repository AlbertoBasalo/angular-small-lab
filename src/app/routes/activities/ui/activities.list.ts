import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Activity } from '../domain/activity.interface';

@Component({
  selector: 'lab-activities-list',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  template: `
    <ul *ngIf="activities.length > 0; else noDataYet">
      <li *ngFor="let activity of activities">
        <a routerLink="/activities/{{ activity.slug }}">{{ activity.title }}</a>
      </li>
    </ul>
    <ng-template #noDataYet>
      <p>🕳️ No activities yet</p>
    </ng-template>
  `,
  styles: [],
})
export class ActivitiesList {
  @Input() activities: Activity[] = [];
}
