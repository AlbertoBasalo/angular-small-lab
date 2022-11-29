import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Contact } from './contact.interface';

@Component({
  selector: 'lab-contact-form',
  standalone: true,
  imports: [CommonModule],
  template: `
    <form>
      <fieldset>
        <legend>Contact us</legend>
        <div>
          <label for="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label for="message">Message</label>
          <textarea id="message" name="message"></textarea>
        </div>
      </fieldset>
      <div>
        <button type="submit" (click)="onSubmit()">Send</button>
      </div>
    </form>
  `,
  styles: [],
})
export class ContactForm {
  @Output() send = new EventEmitter<Contact>();
  onSubmit() {
    const fakeContact: Contact = {
      name: 'Alberto Basalo',
      email: 'alberto@fake.mail',
      message: 'Hello world!',
    };
    this.send.emit(fakeContact);
  }
}
