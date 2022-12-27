import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { UtilsService } from '@srv/utils.service';
import { Activity } from './activity.interface';

@Component({
  selector: 'lab-activity-view',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
      <header>
        <h1>{{ _activity.title }}</h1>
      </header>
      <div id="html" [innerHTML]="html"></div>
    </article>
    >
  `,
  styles: [],
})
export class ActivityView {
  utilsService = inject(UtilsService);
  _activity!: Activity;
  @Input() set activity(activity: Activity) {
    this._activity = activity;
    this.html = this.utilsService.transformToHtml(activity.description);
  }
  html: string = '';
}
