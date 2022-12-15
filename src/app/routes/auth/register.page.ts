import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthService } from './auth.service';
import { CredentialsForm } from './credentials.form';
import { Credentials } from './credentials.interface';

@Component({
  standalone: true,
  imports: [CommonModule, CredentialsForm],
  template: `
    <lab-credentials-form [isNewUser]="true" (send)="onSend($event)">
    </lab-credentials-form>
  `,
  styles: [],
})
export default class RegisterPage {
  authService = inject(AuthService);
  onSend(credentials: Credentials) {
    this.authService.register$(credentials).subscribe();
  }
}
