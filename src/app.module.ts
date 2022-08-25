import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskModule } from './task/task.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { StorageModuleInternal } from './storage/storage.module';
import { BuildModule } from './build/build.module';

@Module({
  imports: [
    TaskModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nest-mongo'),
    AuthModule,
    UserModule,
    StorageModuleInternal,
    BuildModule,
  ],
})
export class AppModule {}
