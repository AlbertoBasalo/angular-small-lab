import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Feature } from '@routes/home/feature.type';

// * 1️⃣ Minimalist example of a page COMPONENT

@Component({
  standalone: true,
  imports: [NgFor, NgIf],
  template: `
    <article>
      <header>
        <h1>Angular Laboratory for <em>small</em> applications</h1>
        <h2>Standalone edition</h2>
        <h3>Showcase of an Activities portal</h3>
      </header>
      <main>
        <ul>
          <li *ngFor="let feature of features">
            {{ feature.title }}
            <span *ngIf="feature.complete">✅</span>
            <span *ngIf="!feature.complete">⏳</span>
          </li>
        </ul>
      </main>
    </article>
  `,
  styles: [],
})
export class HomePage {
  features: Feature[] = [
    { title: '🏝️ Full Standalone APIs', complete: true },
    { title: '🗺️ Lazy Route Components', complete: true },
    { title: '📺 Container - Presenters Components', complete: true },
    { title: '🧪 E2E Testing with Cypress', complete: true },
  ];
}
