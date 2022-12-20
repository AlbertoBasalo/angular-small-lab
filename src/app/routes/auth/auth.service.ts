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

  saveUserToken = tap((userToken: UserToken) =>
    localStorage.setItem('userToken', JSON.stringify(userToken))
  );
  emitUserToken = tap((userToken: UserToken) =>
    this.userToken$.next(userToken)
  );
  navigateToHome = tap(() => this.router.navigate(['/']));
  processUserToken = pipe(
    this.emitUserToken,
    this.saveUserToken,
    this.navigateToHome
  );

  userToken = localStorage.getItem('userToken');
  userToken$ = new BehaviorSubject<UserToken>(
    this.userToken ? JSON.parse(this.userToken) : null
  );

  register$(credentials: Credentials) {
    const { confirmPassword, ...userCredentials } = credentials;
    return this.apiService
      .postUser$(userCredentials)
      .pipe(this.processUserToken);
  }
  logIn$(credentials: Credentials) {
    const { name, confirmPassword, ...loginCredentials } = credentials;
    return this.apiService
      .postLogin$(loginCredentials)
      .pipe(this.processUserToken);
  }
}
