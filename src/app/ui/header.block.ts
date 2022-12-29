import { JsonPipe, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserToken } from '@routes/auth/services/user-token.interface';

@Component({
  selector: 'lab-header-block',
  standalone: true,
  imports: [NgIf, RouterLink, JsonPipe],
  template: `
    <header>
      <nav>
        <ul>
          <a routerLink="/">
            <strong>{{ title }}</strong>
          </a>
        </ul>
        <ul>
          <ng-container *ngIf="userToken; else noUser">
            <li>
              <a routerLink="/admin">👔 Admin</a>
            </li>
            <li>
              <a routerLink="/activities/create">✍🏼 New Activity</a>
            </li>
            <li>
              <span name="userName">🖖🏼 Hi {{ userToken.user.name }}</span>
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
})
export class HeaderBlock {
  @Input() title = '';
  @Input() userToken: UserToken | null = null;
}
