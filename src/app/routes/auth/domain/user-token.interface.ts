export interface UserToken {
  accessToken: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
}

export const NULL_USER_TOKEN: UserToken = {
  accessToken: '',
  user: { id: 0, name: '', email: '' },
};
