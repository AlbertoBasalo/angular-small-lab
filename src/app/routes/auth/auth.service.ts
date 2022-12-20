import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, pipe, tap } from 'rxjs';
import { ApiService } from 'src/app/core/api.service';
import { Credentials } from './credentials.interface';
import { UserToken } from './user-token.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiService = inject(ApiService);
  router = inject(Router);

  saveUser = tap((userToken: UserToken) =>
    localStorage.setItem('userToken', JSON.stringify(userToken))
  );
  emitUer = tap((userToken: UserToken) => this.user$.next(userToken));
  navigateToHome = tap(() => this.router.navigate(['/']));
  processUserInfo = pipe(this.emitUer, this.saveUser, this.navigateToHome);

  user = localStorage.getItem('userToken');
  user$ = new BehaviorSubject<UserToken>(
    this.user ? JSON.parse(this.user) : null
  );

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
