import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from './contact.interface';
import { ContactService } from './contact.service';

// * 2️⃣ Simple example of a page component using a SERVICE

@Component({
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
        <button
          type="submit"
          (click)="onSend(form.value)"
          [disabled]="form.invalid"
        >
          Send
        </button>
      </div>
    </form>
  `,
})
export default class ContactPage {
  form: FormGroup = inject(FormBuilder).group({
    name: ['Alberto Basalo', [Validators.required, Validators.minLength(3)]],
    email: new FormControl('alberto@fake.mail', [
      Validators.required,
      Validators.email,
    ]),
    message: 'I want to use Angular standalone APIs on 2023!',
  });
  constructor(private contactService: ContactService, private router: Router) {}

  onSend(contact: Contact) {
    this.contactService
      .post$(contact)
      .subscribe((ok) => this.router.navigate(['/']));
  }
}
