import { inject, Injectable } from '@angular/core';
import { UserToken } from '@domain/user-token.interface';
import { ApiService } from '@service/api.service';
import { UserTokenService } from '@service/user-token.service';
import { Credentials } from '../domain/credentials.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiService = inject(ApiService);
  userTokenService = inject(UserTokenService);

  register(credentials: Credentials) {
    const { confirmPassword, ...userCredentials } = credentials;
    this.apiService
      .post$<UserToken, Partial<Credentials>>('users', userCredentials)
      .subscribe((userToken) => {
        this.userTokenService.setUserToken(userToken);
      });
  }
  logIn(credentials: Credentials) {
    const { name, confirmPassword, ...loginCredentials } = credentials;
    this.apiService
      .post$<UserToken, Partial<Credentials>>('login', loginCredentials)
      .subscribe((userToken) => {
        this.userTokenService.setUserToken(userToken);
      });
  }
}
