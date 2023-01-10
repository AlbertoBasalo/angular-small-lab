import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserTokenService } from '@service/user-token.service';

export const AuthGuard: CanActivateFn = () => {
  const userTokenService = inject(UserTokenService);
  if (userTokenService.isAnonymous()) {
    userTokenService.redirectToLogin();
  }
  return true;
};
