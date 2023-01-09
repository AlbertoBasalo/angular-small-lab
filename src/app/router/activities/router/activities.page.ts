import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Activity } from '@routes/activities/domain/activity.interface';
import { ActivitiesService } from '@routes/activities/service/activities.service';
import { ActivitiesList } from '../ui/activities.list';

@Component({
  standalone: true,
  imports: [ActivitiesList, RouterLink],
  template: `
    <header>
      <nav>
        <ul>
          <li><a routerLink="./create">✍🏼 Create a new Activity</a></li>
        </ul>
      </nav>
    </header>
    <lab-activities-list [activities]="activities"> </lab-activities-list>
  `,
})
export default class ActivitiesPage implements OnInit {
  activitiesService = inject(ActivitiesService);
  activities: Activity[] = [];
  ngOnInit() {
    this.activitiesService.getActivities$().subscribe((activities) => {
      this.activities = activities;
    });
  }
}
