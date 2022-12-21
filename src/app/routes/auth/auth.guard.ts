import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

export function authGuard() {
  const authService = inject(AuthService);
  const isAnonymous = authService.userToken$.value === null;
  if (isAnonymous) {
    const router = inject(Router);
    router.navigate(['/auth/login']);
  }
  return true;
}
