import { inject, Injectable } from '@angular/core';
import { RestService } from '@srv/rest.service';
import { UtilsService } from '@srv/utils.service';
import { Marked } from '@ts-stack/markdown';
import { Post } from '../post.interface';

@Injectable({
  providedIn: 'root',
})
export class EditorService {
  restService = new RestService<Post>('posts');
  utilsService = inject(UtilsService);

  transform(markdown: string) {
    const html = Marked.parse(markdown);
    return html;
  }

  publish(title: string, markdown: string) {
    const slug = this.utilsService.slugify(title);
    const newPost: Post = {
      slug,
      title,
      markdown,
    };
    this.restService.post$(newPost).subscribe((post) => {});
  }
}
