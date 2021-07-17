import { injectable, inject } from 'inversify';
import 'reflect-metadata';

import { User } from './user';

export type UserCreationPrarms = Pick<User, 'email' | 'name' | 'phoneNumbers'>;

@injectable()
export class UserService {
  public get(id: number, name?: string): User {
    return {
      id,
      email: 'lims2733@naver.com',
      name: name ?? 'Lee Hyukje',
      status: 'Happy',
      phoneNumbers: [],
    };
  }

  public create(UserCreationPrarms: UserCreationPrarms): User {
    return {
      id: Math.floor(Math.random() * 10000),
      status: 'Happy',
      ...UserCreationPrarms,
    };
  }
}
