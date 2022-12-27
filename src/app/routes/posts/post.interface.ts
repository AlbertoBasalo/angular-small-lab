import { Rest } from '@srv/rest.interface';

export interface Post extends Rest {
  slug: string;
  title: string;
  markdown: string;
}
