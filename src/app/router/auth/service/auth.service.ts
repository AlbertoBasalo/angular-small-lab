import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NULL_USER_TOKEN, UserToken } from '@domain/user-token.interface';
import { ApiService } from '@service/api.service';
import { Credentials } from '../domain/credentials.interface';
import { AuthStorage } from './auth.storage';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiService = inject(ApiService);
  router = inject(Router);
  storage = new AuthStorage();
  userToken: UserToken = this.getLocalUserToken();

  getUserId() {
    return this.userToken.user.id;
  }
  register(credentials: Credentials) {
    const { confirmPassword, ...userCredentials } = credentials;
    this.apiService
      .post$<UserToken, Partial<Credentials>>('users', userCredentials)
      .subscribe((userToken) => {
        this.storage.saveUserToken(userToken);
        this.router.navigate(['/']);
      });
  }
  logIn(credentials: Credentials) {
    const { name, confirmPassword, ...loginCredentials } = credentials;
    this.apiService
      .post$<UserToken, Partial<Credentials>>('login', loginCredentials)
      .subscribe((userToken) => {
        this.storage.saveUserToken(userToken);
        this.router.navigate(['/']);
        window.location.reload();
      });
  }
  logOut() {
    this.storage.removeUserToken();
    this.userToken = NULL_USER_TOKEN;
    this.router.navigate(['/auth/login']);
  }
  getLocalUserToken() {
    return this.storage.loadUserToken();
  }
}
