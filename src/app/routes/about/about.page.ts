import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LinkComponent } from 'src/app/ui/components/link.component';
import { AboutService } from './about.service';

@Component({
  selector: 'lab-about',
  standalone: true,
  imports: [CommonModule, LinkComponent],
  providers: [{ provide: AboutService, useValue: new AboutService() }],
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
          <li><lab-link [href]="author.github" caption="GitHub"></lab-link></li>
        </ul>
      </main>
    </article>
  `,
})
export default class AboutPage {
  author = inject(AboutService).getAuthor();
}
