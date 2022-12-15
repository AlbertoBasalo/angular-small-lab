import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CredentialsForm } from './credentials.form';

@Component({
  standalone: true,
  imports: [CommonModule, CredentialsForm],
  template: `
    <lab-credentials-form [isNewUser]="false"></lab-credentials-form>
  `,
  styles: [],
})
export default class LoginPage {}
