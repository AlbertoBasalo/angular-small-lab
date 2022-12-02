import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AboutService } from './about.service';
import { Author } from './author.interface';
import { AuthorView } from './author.view';

@Component({
  standalone: true,
  imports: [CommonModule, AuthorView],
  providers: [AboutService],
  template: ` <lab-author-view [author]="author"></lab-author-view> `,
})
export default class AboutPage {
  author!: Author;
  constructor(aboutService: AboutService) {
    aboutService.getAuthor$().subscribe((author) => (this.author = author));
  }
}
