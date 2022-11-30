import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactForm } from './contact.form';
import { Contact } from './contact.interface';

@Component({
  standalone: true,
  imports: [CommonModule, ContactForm],
  template: ` <lab-contact-form (send)="onSend($event)"></lab-contact-form> `,
  styles: [],
})
export default class ContactPage {
  onSend(contact: Contact) {
    console.log('Sending message: ', contact);
  }
}
