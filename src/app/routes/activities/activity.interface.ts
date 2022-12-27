export interface Activity {
  id?: string;
  slug?: string;
  ownerId?: string;
  title: string;
  description: string;
  date: Date;
  location: string;
  price: number;
  maxParticipants: number;
  paymentMethod: string;
  adultsOnly: boolean;
}
