import { Injectable } from '@nestjs/common';
import { User } from './schemas/user.schemas';
import { UserRepository } from './user.repository';
import { v4 as uuid } from 'uuid';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(userDto: CreateUserDto): Promise<User> {
    return this.userRepository.create({
      userId: uuid(),
      name: userDto.name,
      email: userDto.email,
      password: userDto.password,
    });
  }

  async getUserByEmail(email: string): Promise<User> | undefined {
    return await this.userRepository.findOne({
      email,
    });
  }
}
