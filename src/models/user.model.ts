export enum Role {
  admin = 'admin',
  customer = 'customer',
}

export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  role: Role;
}

export interface Payload {
  sub: string;
  username?: string;
  email?: string;
  userId?: number;
}
