import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, inject, Injectable } from '@angular/core';
import { InstrumentationService } from '@service/instrumentation.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService implements ErrorHandler {
  instrumentationService = inject(InstrumentationService);
  handleError(error: any): void {
    console.log('error', { error });
    console.log({ error });
    if (error instanceof HttpErrorResponse) {
      this.instrumentationService.notifyHttpWarning(error);
    } else {
      // ToDo: check better and notify to a logger
      console.log('error', (error as any)['stack']);
      this.instrumentationService.notifyError(error);
    }
  }
}
