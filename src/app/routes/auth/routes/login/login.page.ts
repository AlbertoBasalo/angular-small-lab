import { Component, inject } from '@angular/core';
import { Credentials } from '../../domain/credentials.interface';
import { AuthService } from '../../service/auth.service';
import { CredentialsForm } from '../../ui/credentials.form';

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
    this.authService.logIn(credentials);
  }
}
