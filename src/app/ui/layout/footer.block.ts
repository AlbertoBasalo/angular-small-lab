import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LinkComponent } from '../link.component';

@Component({
  selector: 'lab-footer-block',
  standalone: true,
  imports: [CommonModule, LinkComponent, RouterLink],
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
export class FooterBlock {
  year = new Date().getFullYear();
  repoUrl = 'https://github.com/AlbertoBasalo/angular-small-lab';
}
