import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LinkComponent } from '../ui/components/link.component';

@Component({
  selector: 'lab-footer-section',
  standalone: true,
  imports: [CommonModule, LinkComponent],
  template: `
    <footer>
      <nav>
        <ul>
          <li>
            <span> ©️ {{ year }} </span>
            <lab-link
              caption="Repository code on GitHub"
              [href]="repoUrl"
            ></lab-link>
          </li>
        </ul>
        <ul>
          <li><a routerLink="/about">ℹ️ About us</a></li>
          <li><a routerLink="/contact">📧 Contact</a></li>
        </ul>
      </nav>
    </footer>
  `,
  styles: [],
})
export class FooterSection {
  year = new Date().getFullYear();
  repoUrl = 'https://github.com/AlbertoBasalo/angular-small-lab';
}
