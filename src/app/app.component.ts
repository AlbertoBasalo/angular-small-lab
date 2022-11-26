import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LinkComponent } from './ui/components/link.component';

@Component({
  selector: 'lab-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, LinkComponent],
  template: `
    <header>
      <nav>
        <ul>
          <strong
            ><a routerLink="/"> {{ title }} </a></strong
          >
        </ul>
        <ul>
          <a routerLink="/about">ℹ️ About us</a>
        </ul>
      </nav>
    </header>
    <router-outlet></router-outlet>
    <footer>
      <p>
        ©️ {{ year }}
        <lab-link
          caption="Repository code on GitHub"
          [href]="repoUrl"
        ></lab-link>
      </p>
    </footer>
  `,
})
export class AppComponent {
  title = '🅰️ 🌱 🧫 angular-small-lab';
  repoUrl = 'https://github.com/AlbertoBasalo/angular-small-lab';
  year = new Date().getFullYear();
}
