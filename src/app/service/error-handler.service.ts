import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, inject, Injectable } from '@angular/core';
import { InstrumentationService } from '@service/instrumentation.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService implements ErrorHandler {
  instrumentationService = inject(InstrumentationService);
  handleError(error: any): void {
    if (error instanceof HttpErrorResponse) {
      this.instrumentationService.notifyHttpWarning(error);
    } else this.instrumentationService.notifyError(error);
  }
}
