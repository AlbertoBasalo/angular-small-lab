import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserTokenService } from '@service/user-token.service';
import { Activity } from './domain/activity.interface';
import { ActivitiesService } from './service/activities.service';
import { ActivitiesList } from './ui/activities.list';

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
    <lab-activities-list [activities]="activities" [currentUserId]="currentUserId"/>
  `,
})
export default class ActivitiesPage implements OnInit {
  activitiesService = inject(ActivitiesService);
  activities: Activity[] = [];
  userTokenService = inject(UserTokenService);
  currentUserId = this.userTokenService.getUserId();
  ngOnInit() {
    this.activitiesService.getActivities$().subscribe((activities) => {
      this.activities = activities;
    });
  }
}
