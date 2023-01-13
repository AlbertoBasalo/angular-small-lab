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
    <aside class="grid">
      <details>
        <summary role="button" class="secondary">
          To log in as an activity organizer :
        </summary>
        <pre>
        <p>Email: richard (at) action (dot) org</p>
        <p>Password: 1234</p>
      </pre>
      </details>
      <details>
        <summary role="button" class="secondary">
          To log in as a participant :
        </summary>
        <pre>
        <p>Email: jeff (at) acme (dot) com</p>
        <p>Password: 1234</p>
      </pre>
      </details>
    </aside>
  `,
  styles: [],
})
export default class LoginPage {
  authService = inject(AuthService);
  onSend(credentials: Credentials) {
    this.authService.logIn(credentials);
  }
}
