import { JsonPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserToken } from '@domain/user-token.interface';
import { UserTokenService } from '@service/user-token.service';

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
          <ng-container *ngIf="userToken?.accessToken; else noUser">
            <li>
              <a routerLink="/admin">👔 Admin</a>
            </li>
            <li>
              <a routerLink="/activities">🚞 Activities</a>
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
  userTokenService = inject(UserTokenService);
  title = '🅰️ 🌱 🧫 angular-small-lab';
  userToken: UserToken = this.userTokenService.getUserToken();
}
