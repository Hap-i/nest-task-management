import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGaurd } from 'src/auth/guards/jwt-auth.guard';
import { TaskControllerBase } from './base/task.controller.base';
import { Task } from './base/schemas/task.schema';
import { TaskService } from './task.service';

@ApiTags('Task')
@ApiBearerAuth()
// @UseGuards(JwtAuthGaurd)
@Controller('task')
export class TaskController extends TaskControllerBase {
  constructor(protected readonly taskService: TaskService) {
    super(taskService);
  }

  @Get('/:id')
  async getTaskById(@Param('id') id: string): Promise<Task> {
    return this.taskService.getTaskById(id);
  }

  // @Delete('/:id')
  // deleteTask(@Param('id') id: string): void {
  //   this.taskService.deleteTask(id);
  // }
}
