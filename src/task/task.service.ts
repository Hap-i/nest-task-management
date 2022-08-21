import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskRepository } from './base/task.repository.base';
import { Task } from './base/schemas/task.schema';
import { TaskServiceBase } from './base/task.service.base';

@Injectable()
export class TaskService extends TaskServiceBase {
  constructor(protected readonly taskRepository: TaskRepository) {
    super(taskRepository);
  }

  async getTaskById(taskId: string): Promise<Task> {
    const task = await this.taskRepository.findOne({ id: taskId });
    if (!task) throw new NotFoundException('Invalid Id');
    return task;
  }
}
