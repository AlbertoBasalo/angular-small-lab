import { inject, Injectable } from '@angular/core';
import { ApiService } from '@srv/api.service';

@Injectable()
export class AboutService {
  api: ApiService = inject(ApiService);

  getAuthor$() {
    return this.api.getAuthor$();
  }
}
