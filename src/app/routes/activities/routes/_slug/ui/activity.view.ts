import { DatePipe, NgIf } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { UtilsService } from 'src/app/service/utils.service';
import { Activity, AgeCategory } from '../../../domain/activity.interface';

@Component({
  selector: 'lab-activity-view',
  standalone: true,
  imports: [NgIf, DatePipe],
  template: `
    <article *ngIf="_activity">
      <header>
        <strong>{{ _activity.title }}</strong>
      </header>
      <div id="html" [innerHTML]="html"></div>
      <footer>
        <span>🎟️{{ getAvailablePlaces() }} </span>
        <span> {{ getDisplayForAgeCategory(_activity.ageCategory) }}</span>
        <span>📅 {{ _activity.date | date : 'yyyy-MMM-dd' }}</span>
        <span>{{ _activity.price }}💲</span>
      </footer>
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
  getAvailablePlaces() {
    return this._activity.maxParticipants - this._activity.currentParticipants;
  }
  getDisplayForAgeCategory(ageCategory: AgeCategory) {
    const ageCategoryDisplay = {
      adult: '👨🏼‍🦰 Only adults',
      child: '👦🏼 For children',
      family: '👨‍👩‍👧‍👦 For the whole family',
    };
    return ageCategoryDisplay[ageCategory];
  }
}
