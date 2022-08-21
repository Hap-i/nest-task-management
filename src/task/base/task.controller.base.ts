import { Body, Get, Post } from '@nestjs/common';
import { ApiForbiddenResponse, ApiOkResponse } from '@nestjs/swagger';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './schemas/task.schema';
import { TaskService } from '../task.service';

export class TaskControllerBase {
  constructor(protected readonly taskService: TaskService) {}
  @Get()
  @ApiOkResponse({ type: [Task] })
  @ApiForbiddenResponse({
    description: 'Please login to use this',
  })
  async getAllTask(): Promise<Task[]> {
    return this.taskService.getAllTask();
  }

  @Post()
  async createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskService.createTask(createTaskDto);
  }
}
