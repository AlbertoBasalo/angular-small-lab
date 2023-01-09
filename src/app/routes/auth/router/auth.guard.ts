import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { NULL_USER_TOKEN } from '@routes/auth/domain/user-token.interface';
import { AuthService } from '../service/auth.service';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const isAnonymous = authService.userToken === NULL_USER_TOKEN;
  if (isAnonymous) {
    const router = inject(Router);
    router.navigate(['/auth/login']);
  }
  return true;
};
