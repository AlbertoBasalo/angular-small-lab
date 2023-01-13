import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UserTokenService } from '@service/user-token.service';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
      <header>
        <span>{{ userToken.user.name }}</span>
      </header>
      <main>
        <span>📧 {{ userToken.user.email }}</span>
      </main>
      <footer>
        <button (click)="onLogout()">Logout</button>
      </footer>
    </article>
  `,
  styles: [],
})
export default class ProfilePage {
  userTokenService = inject(UserTokenService);
  userToken = this.userTokenService.getUserToken();
  onLogout() {
    this.userTokenService.removeUserToken();
  }
}
