import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '@srv/api.service';
import { BehaviorSubject, pipe, tap } from 'rxjs';
import { Credentials } from './credentials.interface';
import { UserToken } from './user-token.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiService = inject(ApiService);
  router = inject(Router);

  userToken = this.getLocalUserToken();
  userToken$ = new BehaviorSubject<UserToken>(this.userToken);
  emitUserToken = tap((userToken: UserToken) =>
    this.userToken$.next(userToken)
  );
  saveUserToken = tap((userToken: UserToken) =>
    localStorage.setItem('userToken', JSON.stringify(userToken))
  );
  navigateToHome = tap(() => this.router.navigate(['/']));
  processUserToken = pipe(
    this.emitUserToken,
    this.saveUserToken,
    this.navigateToHome
  );

  register$(credentials: Credentials) {
    const { confirmPassword, ...userCredentials } = credentials;
    return this.apiService
      .post$<UserToken>('users', userCredentials)
      .pipe(this.processUserToken);
  }
  logIn$(credentials: Credentials) {
    const { name, confirmPassword, ...loginCredentials } = credentials;
    return this.apiService
      .post$<UserToken>('login', loginCredentials)
      .pipe(this.processUserToken);
  }
  logOut() {
    localStorage.removeItem('userToken');
    this.userToken$.next({
      accessToken: '',
      user: { id: 0, name: '', email: '' },
    });
    this.router.navigate(['/auth/login']);
  }
  getLocalUserToken() {
    const storedUserToken = localStorage.getItem('userToken');
    if (storedUserToken) {
      return JSON.parse(storedUserToken);
    }
    return null;
  }
}
