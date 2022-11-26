import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LinkComponent } from './ui/components/link.component';

@Component({
  selector: 'lab-root',
  standalone: true,
  imports: [CommonModule, LinkComponent, RouterOutlet],
  template: `
    <header>
      <a> {{ title }} </a>
    </header>
    <router-outlet></router-outlet>
    <footer>
      <a [href]="repoUrl" target="_blank">Repository code on GitHub </a>
      ©️ {{ year }} by
      <lab-link caption="Repository code on GitHub" [href]="repoUrl"></lab-link>
    </footer>
  `,
})
export class AppComponent {
  title = '🅰️ 🌱 🧫 angular-small-lab';
  repoUrl = 'https://github.com/AlbertoBasalo/angular-small-lab';
  year = new Date().getFullYear();
  author = 'Alberto Basalo';
  authorUrl = 'http://albertobasalo.dev';
}
