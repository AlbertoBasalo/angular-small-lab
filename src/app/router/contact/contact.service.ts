import { inject, Injectable } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Contact } from './contact.interface';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  api: ApiService = inject(ApiService);
  post$(contact: Contact) {
    return this.api.post$<Contact, Contact>('contacts', contact);
  }
}
