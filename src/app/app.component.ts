import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterSection } from './core/footer.section';
import { HeaderSection } from './core/header.section';

@Component({
  selector: 'lab-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    HeaderSection,
    FooterSection,
  ],
  template: `
    <lab-header-section [title]="title"></lab-header-section>
    <router-outlet></router-outlet>
    <lab-footer-section></lab-footer-section>
  `,
})
export class AppComponent {
  title = '🅰️ 🌱 🧫 angular-small-lab';
}
