import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Author } from '../routes/about/author.interface';
import { Credentials } from '../routes/auth/credentials.interface';
import { UserToken } from '../routes/auth/user-token.interface';
import { Contact } from '../routes/contact/contact.interface';
import { API_URL } from './token.providers';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = inject(API_URL);
  http = inject(HttpClient);

  getAuthor$() {
    return this.http.get<Author>(`${this.url}/author`);
  }

  postContact$(contact: Contact) {
    return this.http.post<Contact>(`${this.url}/contacts`, contact);
  }

  postUser$(userCredentials: Omit<Credentials, 'confirmPassword'>) {
    return this.http.post<UserToken>(`${this.url}/users`, userCredentials);
  }

  postLogin$(loginCredentials: Pick<Credentials, 'email' | 'password'>) {
    return this.http.post<UserToken>(`${this.url}/login`, loginCredentials);
  }
}
