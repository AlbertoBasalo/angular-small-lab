export interface Notification {
  category: NotificationCategory;
  title: string;
  message: string;
}
export type NotificationCategory =
  | 'debug'
  | 'error'
  | 'info'
  | 'question'
  | 'warning';
export type UserResponse = 'confirm' | 'cancel';
