import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { UserToken } from '../auth/user-token.interface';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>Top secret</h3>
    <em>Admins only</em>
    <p *ngIf="userToken">
      Welcome
      <b>{{ userToken.user.name }}</b>
    </p>
  `,
  styles: [],
})
export default class AdminPage {
  auth = inject(AuthService);
  userToken: UserToken | null = null;
  constructor() {
    this.auth.userToken$.subscribe((userToken) => (this.userToken = userToken));
  }
}
