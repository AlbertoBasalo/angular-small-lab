import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UserTokenService } from '@service/user-token.service';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: ` <button (click)="onLogout()">Logout</button> `,
  styles: [],
})
export default class ProfilePage {
  userTokenService = inject(UserTokenService);
  onLogout() {
    this.userTokenService.removeUserToken();
  }
}
