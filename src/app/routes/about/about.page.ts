import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AboutService } from './about.service';
import { AuthorView } from './author.view';

@Component({
  standalone: true,
  imports: [CommonModule, AuthorView],
  providers: [{ provide: AboutService, useValue: new AboutService() }],
  template: ` <lab-author-view [author]="author"></lab-author-view>`,
})
export default class AboutPage {
  author = inject(AboutService).getAuthor();
}
