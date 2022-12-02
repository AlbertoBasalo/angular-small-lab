import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AboutService } from './about.service';
import { AuthorView } from './author.view';

@Component({
  standalone: true,
  imports: [CommonModule, AuthorView],
  providers: [AboutService],
  template: `
    <ng-container *ngIf="author$ | async as author">
      <lab-author-view [author]="author"></lab-author-view>
    </ng-container>
  `,
})
export default class AboutPage {
  author$ = this.aboutService.getAuthor$();
  constructor(private aboutService: AboutService) {}
}
