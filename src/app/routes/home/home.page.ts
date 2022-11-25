import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Angular Labs for small applications</h1>
    <h2>Standalone edition</h2>
    <ul>
      <li>No modules</li>
      <li>Lazy loading components</li>
      <li>Folders organization</li>
    </ul>
  `,
  styles: [],
})
export class HomePage {}
