import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Credentials } from '../services/credentials.interface';
import { CredentialsForm } from '../ui/credentials.form';

@Component({
  standalone: true,
  imports: [CredentialsForm],
  template: `
    <lab-credentials-form [isNewUser]="false" (send)="onSend($event)">
    </lab-credentials-form>
  `,
  styles: [],
})
export default class LoginPage {
  authService = inject(AuthService);
  onSend(credentials: Credentials) {
    this.authService.logIn$(credentials).subscribe();
  }
}
