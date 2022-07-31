import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { EntityRepository } from 'src/database/entity.repository';
import { Task, TaskDocument } from './schemas/task.schema';

@Injectable()
export class TaskRepository extends EntityRepository<TaskDocument> {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {
    super(taskModel);
  }
}
