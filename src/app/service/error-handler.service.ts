import { ErrorHandler, inject, Injectable } from '@angular/core';
import { InstrumentationService } from '@service/instrumentation.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService implements ErrorHandler {
  instrumentationService = inject(InstrumentationService);
  handleError(error: any): void {
    this.instrumentationService.notifyError(error);
  }
}
