import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivitiesService } from './activities.service';
import { Activity } from './activity.interface';
import { ActivityView } from './activity.view';

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
    this.service.getBySlug(this.slug).subscribe((activity) => {
      this.activity = activity;
    });
  }
}
