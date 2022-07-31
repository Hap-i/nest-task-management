import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskRepository } from './task.repository';
import { Task } from './schemas/task.schema';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async getTaskById(taskId: string): Promise<Task> {
    const task = await this.taskRepository.findOne({ id: taskId });
    if (!task) throw new NotFoundException('Invalid Id');
    return task;
  }

  async getAllTask(): Promise<Task[]> {
    return this.taskRepository.find({});
  }
  async createTask(taskDto: CreateTaskDto): Promise<Task> {
    return this.taskRepository.create({
      id: uuid(),
      title: taskDto.title,
      description: taskDto.description,
      status: TaskStatus.OPEN,
    });
  }
}
