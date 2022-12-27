import { Injectable } from '@angular/core';
import { Marked } from '@ts-stack/markdown';
@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  transformToHtml(markdown: string) {
    const html = Marked.parse(markdown);
    return html;
  }

  slugify(original: string) {
    return original
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
}
