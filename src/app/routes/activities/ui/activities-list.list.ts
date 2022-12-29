import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Activity } from '@routes/activities/services/activity.interface';

@Component({
  selector: 'lab-activities-list',
  standalone: true,
  imports: [NgFor, RouterLink],
  template: `
    <ul>
      <li *ngFor="let activity of activities">
        <a routerLink="/activities/{{ activity.slug }}">{{ activity.title }}</a>
      </li>
    </ul>
  `,
  styles: [],
})
export class ActivitiesListList {
  @Input() activities: Activity[] = [];
}
