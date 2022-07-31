import { IsNotEmpty, IsOptional, IsUUID } from 'class-validator';

export class UpdateUserDto {
  @IsNotEmpty()
  @IsUUID()
  userId: string;

  @IsOptional()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsNotEmpty()
  email: string;
}
