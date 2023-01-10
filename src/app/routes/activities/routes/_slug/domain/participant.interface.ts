export interface Participant {
  id?: number;
  userId?: number;
  activityId: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  paymentMethod: string;
  acceptConditions: boolean;
}
