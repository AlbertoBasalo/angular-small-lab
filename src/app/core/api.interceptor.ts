import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(`req: ${req.method} ${req.url}`);
  return next(req).pipe(
    catchError((error) => {
      console.log(`err: ${error.status} ${req.method} ${req.url}`);
      return throwError(() => error);
    })
  );
};
