import { NotificationCategory } from './notification-category.type';

export interface Notification {
  category: NotificationCategory;
  title: string;
  message: string;
}
