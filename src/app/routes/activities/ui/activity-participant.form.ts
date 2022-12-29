import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'lab-activity-participant-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="form">
      <fieldset>
        <input
          type="text"
          name="name"
          placeholder="Name"
          formControlName="name"
        />
        <div class="grid">
          <input
            type="email"
            name="email"
            placeholder="Email"
            formControlName="email"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            formControlName="phone"
          />
        </div>
        <input
          type="text"
          name="address"
          placeholder="Address"
          formControlName="address"
        />
        <input
          type="text"
          name="paymentMethod"
          placeholder="Payment Method"
          formControlName="paymentMethod"
        />
        <input
          id="acceptConditions"
          type="checkbox"
          formControlName="acceptConditions"
        />
        <label for="acceptConditions">Accept Conditions</label>
      </fieldset>

      <input
        type="submit"
        value="Submit"
        [disabled]="form.invalid"
        (submit)="submit.next(form.value)"
      />
    </form>
  `,
  styles: [],
})
export class ActivityParticipantForm {
  @Output() submit = new EventEmitter<any>();
  formBuilder = inject(FormBuilder);
  form = this.formBuilder.group({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    paymentMethod: new FormControl('', [Validators.required]),
    acceptConditions: new FormControl('', [Validators.requiredTrue]),
  });
}
