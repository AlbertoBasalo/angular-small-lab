import { Injectable } from '@angular/core';
import { Marked } from '@ts-stack/markdown';

@Injectable({
  providedIn: 'root',
})
export class EditorService {
  constructor() {}

  transform(markdown: string) {
    const html = Marked.parse(markdown);
    return html;
  }
}
