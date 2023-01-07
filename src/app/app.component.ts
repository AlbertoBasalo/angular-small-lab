import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '@routes/auth/services/auth.service';
import { UserToken } from '@routes/auth/services/user-token.interface';
import { FooterBlock } from '@ui/footer.block';
import { HeaderBlock } from '@ui/header.block';

@Component({
  selector: 'lab-root',
  standalone: true,
  imports: [RouterOutlet, HeaderBlock, FooterBlock],
  template: `
    <lab-header-block [title]="title" [userToken]="userToken">
    </lab-header-block>
    <router-outlet></router-outlet>
    <lab-footer-block></lab-footer-block>
  `,
})
export class AppComponent {
  auth = inject(AuthService);
  title = '🅰️ 🌱 🧫 angular-small-lab';
  userToken: UserToken = this.auth.getUserToken();
  constructor() {
    this.auth.userToken$.subscribe((userToken) => (this.userToken = userToken));
  }
}
