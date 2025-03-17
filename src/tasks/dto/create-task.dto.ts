import { IsString, IsNotEmpty, IsEnum, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { TaskStatus } from '../entities/task.entity';

export class CreateTaskDto {
  @ApiProperty({
    description: 'The title of the task',
    example: 'Complete project documentation',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'A detailed description of the task',
    example: 'Write comprehensive documentation for the Task Management API, including setup instructions and API endpoints.',
    required: false,
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    description: 'The current status of the task',
    enum: TaskStatus,
    default: TaskStatus.BACKLOG,
    example: TaskStatus.BACKLOG,
  })
  @IsEnum(TaskStatus)
  @IsOptional()
  status?: TaskStatus;
} 