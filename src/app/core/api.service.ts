import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Author } from '../routes/about/author.interface';
import { Contact } from '../routes/contact/contact.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getAuthor$() {
    return this.http.get<Author>(`${this.url}/author`);
  }
  postContact$(contact: Contact) {
    return this.http.post(`${this.url}/contacts`, contact);
  }
}
