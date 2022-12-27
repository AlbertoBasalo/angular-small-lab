import { Component, inject } from '@angular/core';
import { ContentView } from './content.view';
import { EditorForm } from './editor.form';
import { EditorService } from './editor.service';

@Component({
  standalone: true,
  imports: [EditorForm, ContentView],
  template: `
    <div class="grid">
      <lab-editor-form
        (titleChange)="onTitleChange($event)"
        (markdownChange)="onMarkdownChange($event)"
      ></lab-editor-form>
      <lab-content-view [title]="title" [html]="html"></lab-content-view>
    </div>
    <!-- <button id="publish" (click)="onPublishClick()">Publish</button> -->
  `,
  styles: [],
})
export default class EditorPage {
  service = inject(EditorService);
  html = '';
  title = '';
  markdown = '';

  onTitleChange(title: string) {
    this.title = title;
  }
  onMarkdownChange(markdown: string) {
    this.markdown = markdown;
    this.html = this.service.transform(markdown);
  }
}
