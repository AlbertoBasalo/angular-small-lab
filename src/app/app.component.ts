import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LinkComponent } from './ui/components/link.component';

@Component({
  selector: 'lab-root',
  standalone: true,
  imports: [CommonModule, LinkComponent],
  template: `
    <header>
      <a> {{ title }} </a>
    </header>
    <article>
      <header>
        <h1>Angular Laboratory for <em>small</em> applications</h1>
        <h2>Standalone edition</h2>
      </header>
      <main>
        <ul>
          <li>🏝️ Full Standalone APIs ✅</li>
          <li>🗺️ Lazy Route Components ✅</li>
          <li>📺 Container (page)✅ - Presenters (form, table...) ❌</li>
          <li>🧪 E2E Testing ❌</li>
        </ul>
      </main>
    </article>
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
