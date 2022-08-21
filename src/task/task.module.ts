import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TaskModuleBase } from './base/task.module.base';

@Module({
  imports: [TaskModuleBase],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
