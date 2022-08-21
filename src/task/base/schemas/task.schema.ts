import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import { TaskStatus } from '../task-status.enum';

export type TaskDocument = Task & Document;

@Schema()
export class Task {
  @ApiProperty()
  @Prop()
  id: string;

  @ApiProperty()
  @Prop()
  title: string;

  @ApiProperty()
  @Prop()
  description: string;

  @ApiProperty()
  @Prop()
  status: TaskStatus;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
