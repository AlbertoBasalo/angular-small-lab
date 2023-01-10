import {
  HttpErrorResponse,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { UserToken } from '@domain/user-token.interface';
import { UserTokenService } from '@service/user-token.service';

import { catchError, throwError } from 'rxjs';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  const userTokenService = inject(UserTokenService);
  req = addAuthHeader(userTokenService.getUserToken(), req);
  console.log(`req: ${req.method} ${req.url}`);
  return next(req).pipe(
    catchError((error) => {
      console.log(`err: ${error.status} ${req.method} ${req.url}`);
      redirectOnAuthError(error, userTokenService);
      return throwError(() => error);
    })
  );
};
function addAuthHeader(userToken: UserToken, req: HttpRequest<unknown>) {
  if (userToken && userToken.accessToken) {
    const bearerToken = `Bearer ${userToken.accessToken}`;
    const headers = req.headers.set('Authorization', bearerToken);
    req = req.clone({ headers });
  }
  return req;
}
function redirectOnAuthError(error: any, userTokenService: UserTokenService) {
  if (error instanceof HttpErrorResponse && error.status === 401) {
    userTokenService.redirectToLogin();
  }
}
