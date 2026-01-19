import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  create(user: CreateUserDto): User {
    this.users.push(user);
    return user;
  }

  findOne(id: number): User {
    return this.users[id];
  }
}
