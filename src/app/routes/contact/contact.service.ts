import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { Contact } from './contact.interface';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private api: ApiService) {}
  post$(contact: Contact) {
    return this.api.postContact$(contact);
  }
}
