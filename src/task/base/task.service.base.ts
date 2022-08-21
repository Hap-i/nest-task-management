import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './schemas/task.schema';
import { TaskRepository } from './task.repository.base';
import { v4 as uuid } from 'uuid';
import { TaskStatus } from './task-status.enum';

export class TaskServiceBase {
  constructor(protected readonly taskRepository: TaskRepository) {}
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
