import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskModule } from './task/task.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TaskModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nest-mongo'),
    AuthModule,
    UserModule,
  ],
})
export class AppModule {}
