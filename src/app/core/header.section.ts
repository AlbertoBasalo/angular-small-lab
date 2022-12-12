import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'lab-header-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header>
      <nav>
        <ul>
          <a routerLink="/">
            <strong>{{ title }}</strong>
          </a>
        </ul>
      </nav>
    </header>
  `,
  styles: [],
})
export class HeaderSection {
  @Input() title = '';
}
