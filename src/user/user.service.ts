import { Injectable } from '@nestjs/common';
import { User } from './schemas/user.schemas';
import { UserRepository } from './user.repository';
import { v4 as uuid } from 'uuid';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(userDto: CreateUserDto): Promise<User> {
    const salt = await bcrypt.genSalt();
    const hasedPassword = await bcrypt.hash(userDto.password, salt);
    return this.userRepository.create({
      userId: uuid(),
      name: userDto.name,
      email: userDto.email,
      password: hasedPassword,
    });
  }

  async getUserByEmail(email: string): Promise<User> | undefined {
    return await this.userRepository.findOne({
      email,
    });
  }
}
