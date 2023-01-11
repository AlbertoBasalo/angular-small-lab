import { Injectable } from '@angular/core';
import { Message, UserResponse } from '@domain/message.interface';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class InstrumentationService {
  message: Message = { category: 'info', title: '', body: '' };
  notifications$ = new Subject<Message>();

  notifyError(error: unknown) {
    this.message = {
      category: 'error',
      title: 'Error',
      body: getErrorMessage(error),
    };
    this.notifications$.next(this.message);
    console.error(this.message);
  }

  notifyUserResponse(response: UserResponse) {
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
  return toErrorWithMessage(error).message;
}
