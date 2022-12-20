import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterSection } from './core/footer.section';
import { HeaderSection } from './core/header.section';
import { AuthService } from './routes/auth/auth.service';
import { UserToken } from './routes/auth/user-token.interface';

@Component({
  selector: 'lab-root',
  standalone: true,
  imports: [RouterOutlet, HeaderSection, FooterSection],
  template: `
    <lab-header-section [title]="title" [user]="user"></lab-header-section>
    <router-outlet></router-outlet>
    <lab-footer-section></lab-footer-section>
  `,
})
export class AppComponent {
  auth = inject(AuthService);
  title = '🅰️ 🌱 🧫 angular-small-lab';
  user: UserToken | null = null;
  constructor() {
    this.auth.user$.subscribe((user) => (this.user = user));
  }
}
