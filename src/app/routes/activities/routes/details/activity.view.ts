import { NgIf } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { UtilsService } from 'src/app/service/utils.service';
import { Activity } from '../../domain/activity.interface';

@Component({
  selector: 'lab-activity-view',
  standalone: true,
  imports: [NgIf],
  template: `
    <article *ngIf="_activity">
      <header>
        <strong>{{ _activity.title }}</strong>
      </header>
      <div id="html" [innerHTML]="html"></div>
    </article>
  `,
  styles: [],
})
export class ActivityView {
  utilsService = inject(UtilsService);
  _activity!: Activity;
  @Input() set activity(activity: Activity) {
    if (!activity) return;
    this._activity = activity;
    this.html = this.utilsService.transformToHtml(activity.description);
  }
  html: string = '';
}
