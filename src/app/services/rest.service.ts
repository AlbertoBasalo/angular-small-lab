import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '@routes/auth/services/auth.service';
import { Rest } from './rest.interface';
import { API_URL } from './token.providers';

export class RestService<T extends Rest> {
  url = inject(API_URL);
  http = inject(HttpClient);
  authService = inject(AuthService);

  constructor(public resource: string) {}

  getAll$() {
    return this.http.get<T[]>(`${this.url}/${this.resource}`);
  }
  getById$(id: string) {
    return this.http.get<T>(`${this.url}/${this.resource}/${id}`);
  }
  getByQuery$(query: string) {
    return this.http.get<T[]>(`${this.url}/${this.resource}?${query}`);
  }
  post$(payload: T) {
    payload.ownerId = this.authService.userToken.user.id;
    payload.createdAt = new Date();
    payload.updatedAt = new Date();
    return this.http.post<T>(`${this.url}/${this.resource}`, payload);
  }
  put$(id: string, data: T) {
    data.updatedAt = new Date();
    return this.http.put<T>(`${this.url}/${this.resource}/${id}`, data);
  }
  delete$(id: string) {
    return this.http.delete<T>(`${this.url}/${this.resource}/${id}`);
  }
}
