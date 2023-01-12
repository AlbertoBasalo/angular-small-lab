import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NULL_USER_TOKEN, UserToken } from '@domain/user-token.interface';
import { LocalStorage } from '@service/auth.storage';

@Injectable({
  providedIn: 'root',
})
export class UserTokenService {
  private storage = new LocalStorage<UserToken>('userToken', NULL_USER_TOKEN);
  private userToken: UserToken = this.storage.load();
  router = inject(Router);

  setUserToken(userToken: UserToken) {
    this.storage.save(userToken);
    this.userToken = userToken;
    this.redirectToHome();
  }
  removeUserToken() {
    this.storage.remove();
    this.userToken = NULL_USER_TOKEN;
    this.redirectToLogin();
  }
  redirectToHome() {
    this.router.navigate(['/']);
    // window.location.reload();
  }
  // ToDo: use a subject to notify the components
  redirectToLogin() {
    this.router.navigate(['/auth/login']);
    // window.location.reload();
  }

  getUserToken() {
    return this.userToken;
  }
  getUserId(): number {
    return this.userToken.user.id;
  }
  isAnonymous(): boolean {
    return this.userToken === NULL_USER_TOKEN;
  }
}
