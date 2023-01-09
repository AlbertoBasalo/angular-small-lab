import {
  HttpErrorResponse,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '@routes/auth/service/auth.service';
import { catchError, throwError } from 'rxjs';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  req = addAuthHeaders(authService, req);
  console.log(`req: ${req.method} ${req.url}`);
  return next(req).pipe(
    catchError((error) => {
      console.log(`err: ${error.status} ${req.method} ${req.url}`);
      checkAuthError(error, authService);
      return throwError(() => error);
    })
  );
};
function addAuthHeaders(authService: AuthService, req: HttpRequest<unknown>) {
  const userToken = authService.userToken$.value;
  if (userToken && userToken.accessToken) {
    const accessToken = userToken.accessToken;
    const bearerToken = `Bearer ${accessToken}`;
    const headers = req.headers.set('Authorization', bearerToken);
    req = req.clone({ headers });
  }
  return req;
}
function checkAuthError(error: any, authService: AuthService) {
  if (error instanceof HttpErrorResponse && error.status === 401) {
    authService.logOut();
  }
}
