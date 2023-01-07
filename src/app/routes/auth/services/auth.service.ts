import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '@srv/api.service';
import { BehaviorSubject, pipe, tap } from 'rxjs';
import { AuthStorage } from './auth.storage';
import { Credentials } from './credentials.interface';
import { NULL_USER_TOKEN, UserToken } from './user-token.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiService = inject(ApiService);
  router = inject(Router);
  storage = new AuthStorage();

  userToken$ = new BehaviorSubject<UserToken>(this.getLocalUserToken());

  emitUserToken = tap((userToken: UserToken) =>
    this.userToken$.next(userToken)
  );
  saveUserToken = tap((userToken: UserToken) =>
    this.storage.saveUserToken(userToken)
  );
  navigateToHome = tap(() => this.router.navigate(['/']));

  processUserToken = pipe(
    this.emitUserToken,
    this.saveUserToken,
    this.navigateToHome
  );

  getUserToken() {
    return this.userToken$.value;
  }
  getUserId() {
    return this.userToken$.value.user.id;
  }
  register$(credentials: Credentials) {
    const { confirmPassword, ...userCredentials } = credentials;
    return this.apiService
      .post$<UserToken, Partial<Credentials>>('users', userCredentials)
      .pipe(this.processUserToken);
  }
  logIn$(credentials: Credentials) {
    const { name, confirmPassword, ...loginCredentials } = credentials;
    return this.apiService
      .post$<UserToken, Partial<Credentials>>('login', loginCredentials)
      .pipe(this.processUserToken);
  }
  logOut() {
    this.storage.removeUserToken();
    this.userToken$.next(NULL_USER_TOKEN);
    this.router.navigate(['/auth/login']);
  }
  getLocalUserToken() {
    return this.storage.loadUserToken();
  }
}
