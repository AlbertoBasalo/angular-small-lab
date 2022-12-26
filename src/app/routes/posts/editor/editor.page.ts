import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Marked } from '@ts-stack/markdown';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="form">
      <textarea rows="10" formControlName="markdown"></textarea>
    </form>
    <button id="publish" (click)="onPublishClick()">Publish</button>
    <pre id="html">{{ html | json }}</pre>
  `,
  styles: [],
})
export default class EditorPage {
  html = '';

  form: FormGroup = inject(FormBuilder).group({
    markdown: new FormControl('', Validators.required),
  });
  onPublishClick() {
    console.log('onPublishClick', this.form.value);
    const marked = Marked.parse(this.form.value.markdown);
    console.log('marked', marked);
    this.html = marked;
  }
}
