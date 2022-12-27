import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Activity } from '../activity.interface';

@Component({
  selector: 'lab-editor-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="form">
      <input
        id="title"
        name="title"
        formControlName="title"
        placeholder="Post title"
        [attr.aria-invalid]="hasError('title')"
      />
      <textarea
        id="description"
        name="description"
        formControlName="description"
        rows="10"
        placeholder="Describe the activity in markdown"
        [attr.aria-invalid]="hasError('description')"
      ></textarea>
      <input
        id="date"
        name="date"
        type="date"
        formControlName="date"
        placeholder="Date"
        [attr.aria-invalid]="hasError('date')"
      />
      <input
        id="location"
        name="location"
        formControlName="location"
        placeholder="Location"
        [attr.aria-invalid]="hasError('location')"
      />
      <input
        id="price"
        name="price"
        type="number"
        formControlName="price"
        placeholder="Location"
        [attr.aria-invalid]="hasError('location')"
      />
      <input
        id="maxParticipants"
        name="maxParticipants"
        type="number"
        formControlName="maxParticipants"
        placeholder="Max participants"
        [attr.aria-invalid]="hasError('maxParticipants')"
      />
      <input
        id="paymentMethod"
        name="paymentMethod"
        formControlName="paymentMethod"
        placeholder="Payment method"
        [attr.aria-invalid]="hasError('paymentMethod')"
      />
      <input
        id="adultsOnly"
        name="adultsOnly"
        type="checkbox"
        formControlName="adultsOnly"
        placeholder="Adults only"
        [attr.aria-invalid]="hasError('adultsOnly')"
      />
      <button
        id="submit"
        [disabled]="form.invalid"
        (click)="save.emit(form.value)"
      >
        Save
      </button>
    </form>
  `,
  styles: [],
})
export class EditorForm {
  @Output() save = new EventEmitter<Activity>();

  form: FormGroup = inject(FormBuilder).group({
    title: new FormControl<string>('', {
      validators: [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100),
      ],
      nonNullable: true,
    }),
    description: new FormControl<string>('', {
      validators: [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(1000),
      ],
      nonNullable: true,
    }),
    date: new FormControl<Date>(new Date(), {
      validators: [Validators.required],
      nonNullable: true,
    }),
    location: new FormControl<string>('', {
      validators: [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100),
      ],
      nonNullable: true,
    }),
    maxParticipants: new FormControl<number>(0, {
      nonNullable: true,
    }),
    adultsOnly: new FormControl<boolean>(false, {
      nonNullable: true,
    }),
    price: new FormControl<number>(0, {
      nonNullable: true,
    }),
  });
  hasError(controlName: string): boolean {
    return this.form.get(controlName)?.invalid || false;
  }
}
