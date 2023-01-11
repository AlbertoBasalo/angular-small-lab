import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ErrorHandler } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { ErrorHandlerService } from '@service/error-handler.service';
import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/app.routes';
import { apiInterceptor } from './app/service/api.interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(APP_ROUTES),
    provideHttpClient(withInterceptors([apiInterceptor])),
    {
      provide: ErrorHandler,
      useClass: ErrorHandlerService,
    },
  ],
});
