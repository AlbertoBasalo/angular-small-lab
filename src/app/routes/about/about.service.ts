import { inject, Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';

@Injectable()
export class AboutService {
  api: ApiService = inject(ApiService);

  getAuthor$() {
    return this.api.getAuthor$();
  }
}
