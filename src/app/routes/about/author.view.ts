import { Component, Input } from '@angular/core';
import { LinkComponent } from '@ui/link.component';
import { Author } from './author.interface';

@Component({
  selector: 'lab-author-view',
  standalone: true,
  imports: [LinkComponent],
  template: `
    <article>
      <header>
        <h4>
          Part of a suite of labs for creating applications of any size with
          Angular
        </h4>
        <h3>
          Developed by
          <lab-link [href]="author.www" [caption]="author.name"></lab-link>
        </h3>
      </header>
      <main>
        <ul>
          <li>
            <lab-link [href]="author.twitter" caption="Twitter"></lab-link>
          </li>
          <li>
            <lab-link [href]="author.linkedIn" caption="LinkedIn"></lab-link>
          </li>
          <li><lab-link [href]="author.github" caption="GitHub"></lab-link></li>
        </ul>
      </main>
      <footer></footer>
    </article>
  `,
  styles: [],
})
export class AuthorView {
  @Input() author!: Author;
}
