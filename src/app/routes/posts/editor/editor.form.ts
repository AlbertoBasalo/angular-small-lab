import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'lab-editor-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <article>
      <form [formGroup]="form">
        <input
          id="title"
          name="title"
          formControlName="title"
          placeholder="Post title"
          [attr.aria-invalid]="hasError('title')"
        />
        <textarea
          id="markdown"
          name="markdown"
          formControlName="markdown"
          rows="10"
          placeholder="Post content in markdown"
          [attr.aria-invalid]="hasError('markdown')"
        ></textarea>
      </form>
    </article>
  `,
  styles: [],
})
export class EditorForm implements OnInit {
  @Output() markdownChange = new EventEmitter<string>();
  @Output() titleChange = new EventEmitter<string>();
  form: FormGroup = inject(FormBuilder).group({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(100),
    ]),
    markdown: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(1000),
    ]),
  });

  ngOnInit(): void {
    this.form.get('title')?.valueChanges.subscribe((value) => {
      this.titleChange.emit(value);
    });
    this.form.get('markdown')?.valueChanges.subscribe((value) => {
      this.markdownChange.emit(value);
    });
  }

  hasError(controlName: string): boolean {
    return this.form.get(controlName)?.invalid || false;
  }
}
