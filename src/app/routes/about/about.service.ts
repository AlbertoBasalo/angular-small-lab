import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';

@Injectable()
export class AboutService {
  constructor(private api: ApiService) {}

  getAuthor$() {
    return this.api.getAuthor$();
  }
}
