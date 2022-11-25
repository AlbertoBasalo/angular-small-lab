import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LinkComponent } from 'src/app/ui/link/link.component';

@Component({
  selector: 'lab-about',
  standalone: true,
  imports: [CommonModule, LinkComponent],
  template: `
    <h3>Created by {{ contact.name }}</h3>
    <ul>
      <li>
        <lab-link [href]="contact.twitter" caption="Twitter"></lab-link>
      </li>
      <li>
        <lab-link [href]="contact.linkedIn" caption="LinkedIn"></lab-link>
      </li>
      <li>
        <lab-link [href]="contact.github" caption="GitHub"></lab-link>
      </li>
      <li>
        <lab-link [href]="contact.www" caption="Site"></lab-link>
      </li>
    </ul>
  `,
  styles: [],
})
export default class AboutPage {
  contact: any = {
    name: 'Alberto Basalo',
    www: 'https://www.albertobasalo.dev',
    github: 'https://github.com/albertobasalo',
    linkedIn: 'https://www.linkedin.com/in/albertobasalo/',
    twitter: 'https://twitter.com/albertobasalo',
  };
}
