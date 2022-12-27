import { inject, Injectable } from '@angular/core';
import { AuthService } from '@routes/auth/services/auth.service';
import { ApiService } from '@srv/api.service';
import { Marked } from '@ts-stack/markdown';
import { Post } from '../post.interface';

@Injectable({
  providedIn: 'root',
})
export class EditorService {
  authService = inject(AuthService);
  apiService = inject(ApiService);

  transform(markdown: string) {
    const html = Marked.parse(markdown);
    return html;
  }

  publish(title: string, markdown: string) {
    const slug = this.slugify(title);
    const author = this.authService.userToken.user.id.toString();
    const newPost: Post = {
      slug,
      title,
      markdown,
      author,
    };
    this.apiService.postPost$(newPost).subscribe((post) => {});
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
