import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  template: `
    <article>
      <header>
        <h1>Angular Laboratory for <em>small</em> applications</h1>
        <h2>Standalone edition</h2>
      </header>
      <main>
        <ul>
          <li>🏝️ Full Standalone APIs ✅</li>
          <li>🗺️ Lazy Route Components ✅</li>
          <li>📺 Container (page) - Presenters (form, table...) ✅</li>
          <li>🧪 E2E Testing ⌛</li>
        </ul>
      </main>
    </article>
  `,
  styles: [],
})
export class HomePage {}
