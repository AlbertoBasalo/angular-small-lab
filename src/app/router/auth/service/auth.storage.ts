import {
  NULL_USER_TOKEN,
  UserToken,
} from '../../../domain/user-token.interface';

export class AuthStorage {
  private readonly key = 'userToken';

  loadUserToken(): UserToken {
    const storedUserToken = localStorage.getItem(this.key);
    if (storedUserToken) {
      return JSON.parse(storedUserToken);
    }
    return NULL_USER_TOKEN;
  }
  saveUserToken(userToken: UserToken) {
    localStorage.setItem(this.key, JSON.stringify(userToken));
  }
  removeUserToken() {
    localStorage.removeItem(this.key);
  }
}
