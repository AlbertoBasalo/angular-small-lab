import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lab-header-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <header>
      <nav>
        <ul>
          <a routerLink="/">
            <strong>{{ title }}</strong>
          </a>
        </ul>
        <ul>
          <li>
            <a routerLink="/auth/register">🔏 Register</a>
          </li>
          <li>
            <a routerLink="/auth/login">🔐 Log In</a>
          </li>
        </ul>
      </nav>
    </header>
  `,
  styles: [],
})
export class HeaderSection {
  @Input() title = '';
}
