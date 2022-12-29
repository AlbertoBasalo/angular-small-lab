import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivitiesListList } from '../ui/activities-list.list';

@Component({
  standalone: true,
  imports: [ActivitiesListList, RouterLink],
  template: `
    <header>
      <nav>
        <ul>
          <li><a routerLink="./create">✍🏼 Create a new Activity</a></li>
        </ul>
      </nav>
    </header>
    <lab-activities-list></lab-activities-list>
  `,
})
export default class ActivitiesPage {}
