import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from 'src/user/user.service';
import { JwtPayload } from '../jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        ExtractJwt.fromAuthHeaderAsBearerToken(),
        (request: Request) => {
          const token = request?.cookies['_jwt'];
          if (!token) return null;
          return token;
        },
      ]),
      ignoreExpiration: false,
      secretOrKey: 'just-fun',
    });
  }

  // this method will run after the token is verified
  async validate(validationPayload: JwtPayload) {
    const user = this.userService.getUserByEmail(validationPayload.email);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
