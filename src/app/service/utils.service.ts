import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Marked } from '@ts-stack/markdown';
@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  getParam(activatedRoute: ActivatedRoute, param = 'id') {
    return activatedRoute.snapshot.paramMap.get(param) || '';
  }

  slugify(original: string) {
    return original
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
  transformToHtml(markdown: string) {
    const html = Marked.parse(markdown);
    return html;
  }
}
