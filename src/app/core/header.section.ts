import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserToken } from '../routes/auth/user-token.interface';

@Component({
  selector: 'lab-header-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <header>
      <nav>
        <ul>
          <a routerLink="/">
            <strong>{{ title }}</strong>
          </a>
        </ul>
        <ul>
          <ng-container *ngIf="user; else noUser">
            <li>
              <a routerLink="/admin">👔 Admin</a>
            </li>
          </ng-container>
          <ng-template #noUser>
            <li>
              <a routerLink="/auth/register">🔏 Register</a>
            </li>
            <li>
              <a routerLink="/auth/login">🔐 Log In</a>
            </li>
          </ng-template>
        </ul>
      </nav>
    </header>
  `,
  styles: [],
})
export class HeaderSection {
  @Input() title = '';
  @Input() user: UserToken | null = null;
}
