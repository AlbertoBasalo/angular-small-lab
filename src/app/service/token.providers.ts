import { InjectionToken } from '@angular/core';

// ToDo: get the url from environment

export const API_URL = new InjectionToken<string>('API_URL', {
  providedIn: 'root',
  factory: () => 'http://localhost:3000',
});
