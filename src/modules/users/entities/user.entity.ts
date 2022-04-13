import { randomUUID } from 'crypto';

export class User {
  id: string;

  name: string;

  email: string;

  password: string;

  createdAt: string;

  constructor(data: Partial<User>) {
    Object.assign(this, data);
    if (!this.id) {
      this.id = randomUUID();
    }
  }
}
