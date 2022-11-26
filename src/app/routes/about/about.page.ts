import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LinkComponent } from 'src/app/ui/components/link.component';

@Component({
  standalone: true,
  imports: [CommonModule, LinkComponent],
  template: `
    <article>
      <header>
        <h4>A suite of labs for applications of any size with Angular</h4>
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
          <li>
            <lab-link [href]="author.github" caption="GitHub"></lab-link>
          </li>
        </ul>
      </main>
    </article>
  `,
  styles: [],
})
export default class AboutPage {
  author: any = {
    name: 'Alberto Basalo',
    www: 'https://www.albertobasalo.dev',
    github: 'https://github.com/albertobasalo',
    linkedIn: 'https://www.linkedin.com/in/albertobasalo/',
    twitter: 'https://twitter.com/albertobasalo',
  };
}
