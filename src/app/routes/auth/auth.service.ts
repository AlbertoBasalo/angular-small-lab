import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { pipe, tap } from 'rxjs';
import { ApiService } from 'src/app/core/api.service';
import { Credentials } from './credentials.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiService = inject(ApiService);
  router = inject(Router);

  saveUser = tap((user) => localStorage.setItem('user', JSON.stringify(user)));
  navigateToHome = tap(() => this.router.navigate(['/']));
  processUserInfo = pipe(this.saveUser, this.navigateToHome);

  register$(credentials: Credentials) {
    const { confirmPassword, ...userCredentials } = credentials;
    return this.apiService
      .postUser$(userCredentials)
      .pipe(this.processUserInfo);
  }
  logIn$(credentials: Credentials) {
    const { name, confirmPassword, ...loginCredentials } = credentials;
    return this.apiService
      .postLogin$(loginCredentials)
      .pipe(this.processUserInfo);
  }
}
