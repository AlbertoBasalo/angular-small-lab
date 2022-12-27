import { Component, Input } from '@angular/core';

// ToDo: sanitize html
@Component({
  selector: 'lab-content-view',
  standalone: true,
  imports: [],
  template: `
    <article>
      <header>
        <h1>{{ title }}</h1>
      </header>
      <div id="html" [innerHTML]="html"></div>
    </article>
  `,
  styles: [],
})
export class ContentView {
  @Input() title: string = '';
  @Input() html: string = '';
}
