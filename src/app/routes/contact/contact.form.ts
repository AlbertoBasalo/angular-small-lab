import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Contact } from './contact.interface';

@Component({
  selector: 'lab-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="form">
      <fieldset>
        <legend>Contact us</legend>
        <div>
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            formControlName="name"
            [attr.aria-invalid]="form.controls['name'].invalid"
          />
        </div>
        <div>
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            formControlName="email"
            [attr.aria-invalid]="form.controls['email'].invalid"
          />
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
        <button type="submit" (click)="onSubmit()" [disabled]="form.invalid">
          Send
        </button>
      </div>
    </form>
  `,
  styles: [],
})
export class ContactForm {
  @Output() send = new EventEmitter<Contact>();

  form: FormGroup = inject(FormBuilder).group({
    name: ['Alberto Basalo', [Validators.required, Validators.minLength(3)]],
    email: new FormControl('alberto@fake.mail', [
      Validators.required,
      Validators.email,
    ]),
    message: 'I want to use Angular standalone APIs on 2023!',
  });

  onSubmit() {
    this.send.emit(this.form.value);
  }
}
