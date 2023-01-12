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
  currentParticipants: number;
  ageCategory: AgeCategory;
  status: ActivityStatus;
}

export type AgeCategory = 'adult' | 'child' | 'family';
export type ActivityStatus = 'published' | 'cancelled';

export const EMPTY_ACTIVITY: Activity = {
  title: '',
  description: '',
  date: new Date(),
  location: '',
  price: 0,
  maxParticipants: 10,
  currentParticipants: 0,
  ageCategory: 'family',
  status: 'published',
};
