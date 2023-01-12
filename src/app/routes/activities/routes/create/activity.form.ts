import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  Activity,
  ActivityStatus,
  AgeCategory,
  EMPTY_ACTIVITY,
} from '../../domain/activity.interface';

// ToDo: Add labelling to inputs

@Component({
  selector: 'lab-activity-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <!-- add labels to input controls -->

    <form [formGroup]="form">
      <label for="title">Title</label>
      <input
        id="title"
        name="title"
        formControlName="title"
        placeholder="Post title"
        [attr.aria-invalid]="hasError('title')"
      />
      <label for="description">Description</label>
      <textarea
        id="description"
        name="description"
        formControlName="description"
        rows="10"
        placeholder="Describe the activity in markdown"
        [attr.aria-invalid]="hasError('description')"
      ></textarea>
      <label for="date">Date</label>
      <input
        id="date"
        name="date"
        type="date"
        formControlName="date"
        placeholder="Date"
        [attr.aria-invalid]="hasError('date')"
      />
      <label for="location">Location</label>
      <input
        id="location"
        name="location"
        formControlName="location"
        placeholder="Location"
        [attr.aria-invalid]="hasError('location')"
      />
      <label for="price">Price</label>
      <input
        id="price"
        name="price"
        type="currency"
        formControlName="price"
        placeholder="Location"
        [attr.aria-invalid]="hasError('location')"
      />
      <label for="maxParticipants">Max participants</label>
      <input
        id="maxParticipants"
        name="maxParticipants"
        type="number"
        formControlName="maxParticipants"
        placeholder="Max participants"
        [attr.aria-invalid]="hasError('maxParticipants')"
      />
      <label for="ageCategory">Age category</label>
      <select
        id="ageCategory"
        name="ageCategory"
        formControlName="ageCategory"
        [attr.aria-invalid]="hasError('ageCategory')"
      >
        <option value="family">Whole Family</option>
        <option value="adults">Only Adults</option>
        <option value="kids">Just for Kids</option>
      </select>
      <label for="status">Status</label>
      <label for="published">
        <input
          type="radio"
          name="status"
          formControlName="status"
          id="published"
          value="published"
        />
        Published
      </label>
      <label for="cancelled">
        <input
          type="radio"
          name="status"
          formControlName="status"
          id="cancelled"
          value="cancelled"
        />
        Cancelled
      </label>

      <button
        id="submit"
        [disabled]="form.invalid"
        (click)="save.emit(form.value)"
      >
        Save activity
      </button>
    </form>
  `,
  styles: [],
})
export class ActivityForm {
  private _activity: Activity = EMPTY_ACTIVITY;
  public get activity(): Activity {
    return this._activity;
  }
  @Input()
  public set activity(value: Activity) {
    this._activity = value;
    this.form.patchValue(value);
    this.form.controls['title'].disable();
  }
  @Output() save = new EventEmitter<Activity>();

  form: FormGroup = inject(FormBuilder).group({
    title: new FormControl<string>(this.activity.title, {
      validators: [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100),
      ],
      nonNullable: true,
    }),
    description: new FormControl<string>(this.activity.description, {
      validators: [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(1000),
      ],
      nonNullable: true,
    }),
    date: new FormControl<Date>(this.activity.date, {
      validators: [Validators.required],
      nonNullable: true,
    }),
    location: new FormControl<string>(this.activity.location, {
      validators: [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100),
      ],
      nonNullable: true,
    }),
    maxParticipants: new FormControl<number>(this.activity.maxParticipants, {
      nonNullable: true,
    }),
    ageCategory: new FormControl<AgeCategory>(this.activity.ageCategory, {
      nonNullable: true,
    }),
    price: new FormControl<number>(this.activity.price, {
      nonNullable: true,
    }),
    status: new FormControl<ActivityStatus>(this.activity.status, {
      nonNullable: true,
    }),
  });
  hasError(controlName: string): boolean {
    return this.form.get(controlName)?.invalid || false;
  }
}
