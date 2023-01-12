import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Activity } from '../domain/activity.interface';

@Component({
  selector: 'lab-activities-list',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink, DatePipe],
  template: `
    <ul *ngIf="activities.length > 0; else noDataYet">
      <li *ngFor="let activity of activities">
        <span *ngIf="activity.status === 'published'">
          ✅
          <a routerLink="/activities/{{ activity.slug }}">{{
            activity.title
          }}</a>
        </span>
        <span *ngIf="activity.status === 'cancelled'">
          🚫
          {{ activity.title }}
        </span>
        <span> 🧭 {{ activity.location }}</span>
        <span> 📅 {{ activity.date | date : 'yyyy-MMM-dd' }}</span>
        <span *ngIf="currentUserId === activity.userId"
          ><a routerLink="/activities/{{ activity.slug }}/edit">
            ✍🏼 (edit)
          </a></span
        >
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
  @Input() currentUserId: number = 0;
}
