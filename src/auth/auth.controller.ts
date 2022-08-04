import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User } from 'src/user/schemas/user.schemas';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.authService.signup(createUserDto);
  }

  @Post('signin')
  async signin(
    @Body() body: { email: string; password: string },
    @Res({ passthrough: true }) response: Response,
  ): Promise<{ accessToken: string }> {
    const token = await this.authService.signin(body.email, body.password);
    response.cookie('_jwt', token.accessToken, {
      httpOnly: true,
      secure: false,
    });
    return token;
  }
}
