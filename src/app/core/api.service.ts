import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Author } from '../routes/about/author.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getAuthor$() {
    return this.http.get<Author>('http://localhost:3000/author');
  }
}
