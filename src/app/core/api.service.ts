import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Author } from '../routes/about/author.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getAuthor$() {
    return this.http.get<Author>(`${this.url}/author`);
  }
}
