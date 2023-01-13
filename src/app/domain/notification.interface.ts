import { UserResponse } from '@domain/user-response.type';
import { Subject } from 'rxjs';
import { NotificationCategory } from './notification-category.type';

export interface Notification {
  category: NotificationCategory;
  title: string;
  message: string;
  response$?: Subject<UserResponse>;
}
