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

  getById$<T>(resource: string, id: string | number = '') {
    return this.http.get<T>(this.createUrl({ resource, id }));
  }

  getByQuery$<T>(resource: string, query: string) {
    return this.http.get<T>(this.createUrl({ resource, query }));
  }

  post$<T, K_PAYLOAD>(resource: string, payload: K_PAYLOAD) {
    return this.http.post<T>(this.createUrl({ resource }), payload);
  }

  put$<T>(resource: string, id: string | number, payload: Partial<T>) {
    return this.http.put<T>(this.createUrl({ resource, id }), payload);
  }

  delete$<T>(resource: string, id: string | number = '') {
    return this.http.delete<T>(this.createUrl({ resource, id }));
  }
  private createUrl(urlParts: UrlParts): string {
    const resourceUrl = `${this.apiUrl}/${urlParts.resource}`;
    if (urlParts.id) {
      return `${resourceUrl}/${urlParts.id}`;
    }
    if (urlParts.query) {
      return `${resourceUrl}?${urlParts.query}`;
    }
    return resourceUrl;
  }
}

type UrlParts = { resource: string; id?: string | number; query?: string };
