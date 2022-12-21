import { NgIf } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Credentials } from '../services/credentials.interface';

@Component({
  selector: 'lab-credentials-form',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  template: `
    <form [formGroup]="form">
      <fieldset>
        <div *ngIf="isNewUser">
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
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            formControlName="password"
            [attr.aria-invalid]="form.controls['password'].invalid"
          />
        </div>
        <div *ngIf="isNewUser">
          <label for="confirmPassword">Confirm password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            formControlName="confirmPassword"
            [attr.aria-invalid]="form.controls['confirmPassword'].invalid"
          />
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
export class CredentialsForm {
  @Input() isNewUser = false;
  @Output() send = new EventEmitter<Credentials>();
  form: FormGroup = inject(FormBuilder).group<Credentials>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  onSubmit() {
    this.send.emit(this.form.value);
  }
}
