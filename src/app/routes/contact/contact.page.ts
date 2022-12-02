import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactForm } from './contact.form';
import { Contact } from './contact.interface';
import { ContactService } from './contact.service';

@Component({
  standalone: true,
  imports: [CommonModule, ContactForm],
  template: ` <lab-contact-form (send)="onSend($event)"></lab-contact-form> `,
  styles: [],
})
export default class ContactPage {
  constructor(private contactService: ContactService, private router: Router) {}

  onSend(contact: Contact) {
    this.contactService
      .post$(contact)
      .subscribe((ok) => this.router.navigate(['/']));
  }
}
