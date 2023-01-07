import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const isAnonymous = authService.getUserId() === 0;
  if (isAnonymous) {
    const router = inject(Router);
    router.navigate(['/auth/login']);
  }
  return true;
};
