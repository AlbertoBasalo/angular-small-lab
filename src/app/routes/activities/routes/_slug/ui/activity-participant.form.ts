import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  Participant,
  PaymentMethod,
} from '@routes/activities/routes/_slug/domain/participant.interface';

@Component({
  selector: 'lab-activity-participant-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="form">
      <legend><strong>Come on, apply to this activity!</strong></legend>
      <fieldset>
        <label for="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          formControlName="name"
        />
        <div class="grid">
          <div>
            <label for="email">Email address</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              formControlName="email"
            />
          </div>
          <div>
            <label for="phone">Phone number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              formControlName="phone"
            />
          </div>
        </div>
        <label for="address">Complete address</label>
        <input
          type="text"
          name="address"
          placeholder="Address"
          formControlName="address"
        />
        <!-- ToDo: Selector for payment methods -->
        <label for="paymentMethod">Select your preferred payment method</label>
        <input
          type="text"
          name="paymentMethod"
          placeholder="Payment Method"
          formControlName="paymentMethod"
        />
        <div>
          <input
            id="acceptConditions"
            type="checkbox"
            formControlName="acceptConditions"
          />
          <label for="acceptConditions">Accept Conditions</label>
        </div>
      </fieldset>

      <input
        type="button"
        value="I want ot participate!"
        [disabled]="form.invalid"
        (click)="onAddParticipantClick()"
      />
    </form>
  `,
  styles: [],
})
export class ActivityParticipantForm {
  @Output() addParticipant = new EventEmitter<Partial<Participant>>();
  formBuilder = inject(FormBuilder);
  form = this.formBuilder.group<ControlsOf<Partial<Participant>>>({
    name: new FormControl<string>('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
      nonNullable: true,
    }),
    phone: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    address: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    paymentMethod: new FormControl<PaymentMethod>('card', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    acceptConditions: new FormControl(false, {
      validators: [Validators.requiredTrue],
      nonNullable: true,
    }),
  });
  onAddParticipantClick() {
    this.addParticipant.next(this.form.value);
  }
}

export type ControlsOf<T extends Record<string, any>> = {
  [K in keyof T]: T[K] extends Record<any, any>
    ? FormGroup<ControlsOf<T[K]>>
    : FormControl<T[K]>;
};
