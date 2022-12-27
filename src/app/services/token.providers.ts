import { InjectionToken } from '@angular/core';

export const API_URL = new InjectionToken<string>('API_URL', {
  providedIn: 'root',
  factory: () => 'http://localhost:3000',
});

export const RESOURCE_NAME = new InjectionToken<string>('RESOURCE_NAME', {
  providedIn: 'root',
  factory: () => '',
});
