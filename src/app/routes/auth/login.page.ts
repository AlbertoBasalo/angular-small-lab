import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthService } from './auth.service';
import { CredentialsForm } from './credentials.form';
import { Credentials } from './credentials.interface';

@Component({
  standalone: true,
  imports: [CommonModule, CredentialsForm],
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
