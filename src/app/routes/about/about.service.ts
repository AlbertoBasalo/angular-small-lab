import { inject, Injectable } from '@angular/core';
import { ApiService } from '@srv/api.service';
import { Author } from './author.interface';

@Injectable()
export class AboutService {
  api: ApiService = inject(ApiService);

  getAuthor$() {
    return this.api.getById$<Author>('author');
  }
}
