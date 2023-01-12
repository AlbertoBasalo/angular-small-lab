import { Injectable } from '@angular/core';
import { Notification } from '@domain/notification.interface';
import { UserResponse } from '@domain/user-response.type';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class InstrumentationService {
  notification: Notification = { category: 'info', title: '', message: '' };
  notifications$ = new Subject<Notification>();
  responses$ = new Subject<UserResponse>();

  // ToDo: move console logs to a logger service subscribed to notifications$

  notifyError(error: unknown, title = 'Error') {
    this.notification = {
      category: 'error',
      title,
      message: getErrorMessage(error),
    };
    this.notifications$.next(this.notification);
    console.error(this.notification);
  }

  notifyWarning(error: unknown, title = 'Warning') {
    this.notification = {
      category: 'warning',
      title,
      message: getErrorMessage(error),
    };
    this.notifications$.next(this.notification);
    console.warn(this.notification);
  }

  notifyHttpWarning(error: unknown, title = 'Communication error') {
    this.notification = {
      category: 'warning',
      title,
      message: getErrorMessage(error),
    };
    this.notifications$.next(this.notification);
    console.warn(this.notification);
  }

  notifyInfo(message: string, title = 'Info') {
    this.notification = {
      category: 'info',
      title,
      message,
    };
    this.notifications$.next(this.notification);
    console.info(this.notification);
  }

  notifyDebug(message: string, title = 'Debug') {
    this.notification = {
      category: 'debug',
      title,
      message,
    };
    this.notifications$.next(this.notification);
    console.debug(this.notification);
  }

  notifyQuestion(message: string, title = 'Question') {
    this.notification = {
      category: 'question',
      title,
      message,
    };
    this.notifications$.next(this.notification);
    console.log(this.notification);
  }

  notifyUserResponse(response: UserResponse) {
    this.responses$.next(response);
    console.log(response);
  }
}

type ErrorWithMessage = {
  message: string;
};

function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>)['message'] === 'string'
  );
}

function toErrorWithMessage(maybeError: unknown): ErrorWithMessage {
  if (isErrorWithMessage(maybeError)) return maybeError;

  try {
    return new Error(JSON.stringify(maybeError));
  } catch {
    // fallback in case there's an error stringifying the maybeError
    // like with circular references for example.
    return new Error(String(maybeError));
  }
}

function getErrorMessage(error: unknown) {
  const errorWithMessage = toErrorWithMessage(error);
  return errorWithMessage.message;
}
