import { Body, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiForbiddenResponse, ApiOkResponse } from '@nestjs/swagger';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './schemas/task.schema';
import { TaskService } from '../task.service';
import { UpdateTaskDto } from './dto/update-task.dto';

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

  @Get('/:id')
  async getTaskById(@Param('id') id: string): Promise<Task> {
    console.log('dddd');

    return await this.taskService.getTaskById(id);
  }

  @Patch(':id')
  async updateTask(
    @Param('id') id: string,
    @Body() updateTask: UpdateTaskDto,
  ): Promise<Task> {
    return await this.taskService.updateTask(id, updateTask);
  }
}
