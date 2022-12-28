import { inject, Injectable } from '@angular/core';
import { ApiService } from '@srv/api.service';
import { Contact } from './contact.interface';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  api: ApiService = inject(ApiService);
  post$(contact: Contact) {
    return this.api.post$<Contact>('contacts', contact);
  }
}
