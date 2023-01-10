import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AboutService } from './about.service';
import { Author } from './author.interface';
import { AuthorView } from './author.view';

// * 3️⃣ Complete example of a page component using a service and a PRESENTATIONAL component

@Component({
  standalone: true,
  imports: [NgIf, AuthorView],
  providers: [AboutService],
  template: `
    <lab-author-view *ngIf="author" [author]="author"></lab-author-view>
  `,
})
export default class AboutPage {
  author!: Author;
  constructor(aboutService: AboutService) {
    aboutService.getAuthor$().subscribe((author) => (this.author = author));
  }
}
