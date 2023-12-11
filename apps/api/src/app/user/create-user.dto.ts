import { User } from '@pevs/api-interfaces';

export class CreateUserDto implements Omit<User, 'id'> {
  name: string;
  email: string;
}
