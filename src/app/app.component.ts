import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '@routes/auth/services/auth.service';
import { UserToken } from '@routes/auth/services/user-token.interface';
import { FooterSection } from '@ui/footer.section';
import { HeaderSection } from '@ui/header.section';

@Component({
  selector: 'lab-root',
  standalone: true,
  imports: [RouterOutlet, HeaderSection, FooterSection],
  template: `
    <lab-header-section [title]="title" [userToken]="userToken">
    </lab-header-section>
    <router-outlet></router-outlet>
    <lab-footer-section></lab-footer-section>
  `,
})
export class AppComponent {
  auth = inject(AuthService);
  title = '🅰️ 🌱 🧫 angular-small-lab';
  userToken: UserToken | null = null;
  constructor() {
    this.auth.userToken$.subscribe((userToken) => (this.userToken = userToken));
  }
}
