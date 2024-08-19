export type User = {
  id: number;
  name: string;
  age: number;
  city: string;
  phone: string;
  vacation: boolean;
};

export type UserData = {
  [key: string]: User;
};

