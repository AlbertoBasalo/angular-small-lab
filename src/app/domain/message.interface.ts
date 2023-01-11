export interface Message {
  category: MessageCategory;
  title: string;
  body: string;
}
export type MessageCategory = 'error' | 'info' | 'warning' | 'question';
export type UserResponse = 'confirm' | 'cancel';
