import {
  HttpErrorResponse,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { UserToken } from '@domain/user-token.interface';
import { InstrumentationService } from '@service/instrumentation.service';
import { UserTokenService } from '@service/user-token.service';

import { catchError, throwError } from 'rxjs';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  const userTokenService = inject(UserTokenService);
  const instrumentationService = inject(InstrumentationService);
  req = addAuthHeader(userTokenService.getUserToken(), req);
  instrumentationService.notifyDebug(`req: ${req.method} ${req.url}`);
  return next(req).pipe(
    catchError((error) => {
      console.log(`err: ${error.status} ${req.method} ${req.url}`);
      redirectOnAuthError(error, userTokenService, instrumentationService);
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
function redirectOnAuthError(
  error: any,
  userTokenService: UserTokenService,
  instrumentationService: InstrumentationService
) {
  if (error instanceof HttpErrorResponse && error.status === 401) {
    instrumentationService.notifyError(error);
    userTokenService.removeUserToken();
  }
}
