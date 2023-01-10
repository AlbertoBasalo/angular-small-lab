import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@router/auth/service/auth.service';
import { NULL_USER_TOKEN } from 'src/app/domain/user-token.interface';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const isAnonymous = authService.userToken === NULL_USER_TOKEN;
  if (isAnonymous) {
    const router = inject(Router);
    router.navigate(['/auth/login']);
  }
  return true;
};
