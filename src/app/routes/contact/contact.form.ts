import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Contact } from './contact.interface';

@Component({
  selector: 'lab-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="form">
      <fieldset>
        <legend>Contact us</legend>
        <div>
          <label for="name">Name</label>
          <input type="text" id="name" name="name" formControlName="name" />
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" name="email" formControlName="email" />
        </div>
        <div>
          <label for="message">Message</label>
          <textarea
            id="message"
            name="message"
            formControlName="message"
          ></textarea>
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

  form: FormGroup = inject(FormBuilder).group({
    name: 'Alberto Basalo',
    email: 'alberto@fake.mail',
    message: 'I want to use Angular standalone APIs on 2023!',
  });

  onSubmit() {
    this.send.emit(this.form.value);
  }
}
