import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivityView } from '../interface/activity.view';
import { ActivitiesService } from '../services/activities.service';
import { Activity } from '../services/activity.interface';

@Component({
  standalone: true,
  imports: [ActivityView],
  template: `<lab-activity-view [activity]="activity"></lab-activity-view>`,
  styles: [],
})
export default class ActivityPage implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  service = inject(ActivitiesService);
  slug = this.activatedRoute.snapshot.paramMap.get('slug') || '';
  activity!: Activity;
  ngOnInit() {
    this.service.getBySlug(this.slug).subscribe((activities) => {
      const activity = activities[0];
      this.activity = activity;
    });
  }
}
