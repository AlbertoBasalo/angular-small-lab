import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from './token.providers';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = inject(API_URL);
  http = inject(HttpClient);

  getAll$<T>(resource: string) {
    return this.http.get<T[]>(`${this.url}/${resource}`);
  }

  getById$<T>(resource: string, id: string = '') {
    return this.http.get<T>(`${this.url}/${resource}/${id}`);
  }

  getByQuery$<T>(resource: string, query: string) {
    return this.http.get<T>(`${this.url}/${resource}?${query}`);
  }

  post$<T>(resource: string, payload: unknown) {
    return this.http.post<T>(`${this.url}/${resource}`, payload);
  }

  put$<T>(resource: string, id: string, payload: Partial<T>) {
    return this.http.put<T>(`${this.url}/${resource}/${id}`, payload);
  }
}
