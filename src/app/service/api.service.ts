import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from './token.providers';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = inject(API_URL);
  http = inject(HttpClient);

  getAll$<T>(resource: string) {
    return this.http.get<T[]>(this.createUrl({ resource }));
  }

  getById$<T>(resource: string, id: string = '') {
    return this.http.get<T>(this.createUrl({ resource, id }));
  }

  getByQuery$<T>(resource: string, query: string) {
    return this.http.get<T>(this.createUrl({ resource, query }));
  }

  post$<T, K>(resource: string, payload: K) {
    return this.http.post<T>(this.createUrl({ resource }), payload);
  }

  put$<T>(resource: string, id: string, payload: Partial<T>) {
    return this.http.put<T>(this.createUrl({ resource, id }), payload);
  }
  private createUrl(urlParts: UrlParts): string {
    if (urlParts.id) {
      return `${this.apiUrl}/${urlParts.resource}/${urlParts.id}`;
    }
    if (urlParts.query) {
      return `${this.apiUrl}/${urlParts.resource}?${urlParts.query}`;
    }
    return `${this.apiUrl}/${urlParts.resource}`;
  }
}

type UrlParts = { resource: string; id?: string; query?: string };
