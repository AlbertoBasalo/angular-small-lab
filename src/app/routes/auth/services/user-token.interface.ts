export interface UserToken {
  accessToken: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
}
