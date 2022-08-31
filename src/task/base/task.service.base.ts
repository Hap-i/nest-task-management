import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './schemas/task.schema';
import { TaskRepository } from './task.repository.base';
import { v4 as uuid } from 'uuid';
import { TaskStatus } from './task-status.enum';
import { UpdateTaskDto } from './dto/update-task.dto';

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
  async getTaskById(id: uuid): Promise<Task> {
    return await this.taskRepository.findOne({ id: id });
  }

  async updateTask(id: string, body: UpdateTaskDto): Promise<Task> {
    return await this.taskRepository.findOneAndUpdate({ id: id }, body);
  }
}
