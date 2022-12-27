import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Activity } from '../activity.interface';
import { EditorForm } from './editor.form';
import { EditorService } from './editor.service';

@Component({
  standalone: true,
  imports: [EditorForm],
  template: ` <lab-editor-form (save)="onSave($event)"></lab-editor-form> `,
  styles: [],
})
export default class EditorPage {
  service = inject(EditorService);
  router = inject(Router);
  onSave(activity: Activity) {
    this.service
      .save(activity)
      .subscribe((activity) =>
        this.router.navigate(['/activities', activity.slug])
      );
  }
}
