import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const isAnonymous = authService.userToken$.value === null;
  if (isAnonymous) {
    const router = inject(Router);
    router.navigate(['/auth/login']);
  }
  return true;
};
