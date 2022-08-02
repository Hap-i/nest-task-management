import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/schemas/user.schemas';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validate(email: string, password: string): Promise<User> {
    const user = this.userService.getUserByEmail(email);
    if (!user) {
      return null;
    }
    const IspasswordValid = password === (await user).password;
    return IspasswordValid ? user : null;
  }

  async login(user: User): Promise<{ access_token: string }> {
    const payload = {
      email: user.email,
      sub: user.userId,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  // async verifyJwt(token: string): Promise<User> {
  //   const decode = await this.jwtService.verify(token, {
  //     secret: 'just-fun',
  //   });

  //   const user = this.userService.getUserByEmail(decode.email);
  //   if (!user) throw new UnauthorizedException();
  //   return user;
  // }
}
