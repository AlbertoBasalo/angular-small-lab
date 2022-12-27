import { Rest } from '@srv/rest.interface';

export interface Activity extends Rest {
  slug?: string;
  title: string;
  description: string;
  date: Date;
  location: string;
  price: number;
  maxParticipants: number;
  paymentMethod: string;
  adultsOnly: boolean;
}
