export interface Activity {
  id?: number;
  userId?: number;
  slug?: string;
  title: string;
  description: string;
  date: Date;
  location: string;
  price: number;
  maxParticipants: number;
  ageCategory: 'adult' | 'child' | 'family';
}