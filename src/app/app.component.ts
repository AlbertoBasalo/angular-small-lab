import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LinkComponent } from './ui/link/link.component';

@Component({
  selector: 'lab-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, LinkComponent],
  template: `
    <header>
      <a routerLink="/">
        {{ title }}
      </a>
      <nav>
        <a routerLink="/about">About us</a>
      </nav>
    </header>
    <router-outlet></router-outlet>
    <footer>
      <p>
        <lab-link caption="Repository" [href]="repoUrl"></lab-link>
      </p>
    </footer>
  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-small-lab';
  repoUrl = 'https://github.com/AlbertoBasalo/angular-small-lab';
}
