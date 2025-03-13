import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { createClient } from 'redis';

@Injectable()
export class TasksService {
  private redisClient;

  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {
    this.redisClient = createClient({
      url: process.env.REDIS_URL,
    });
    this.redisClient.connect();
  }

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = this.tasksRepository.create(createTaskDto);
    return this.tasksRepository.save(task);
  }

  async findAll(): Promise<Task[]> {
    return this.tasksRepository.find();
  }

  async findOne(id: string): Promise<Task> {
    
    const cachedTask = await this.redisClient.get(`task:${id}`);
    if (cachedTask) {
      return JSON.parse(cachedTask);
    }

    const task = await this.tasksRepository.findOne({ where: { id } });
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    
    await this.redisClient.set(`task:${id}`, JSON.stringify(task), {
      EX: 3600, 
    });
    return task;
  }

  async update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const task = await this.findOne(id);
    Object.assign(task, updateTaskDto);
    
    
    await this.redisClient.del(`task:${id}`);
    
    return this.tasksRepository.save(task);
  }

  async remove(id: string): Promise<void> {
    const task = await this.findOne(id);
    
    
    await this.redisClient.del(`task:${id}`);
    
    await this.tasksRepository.remove(task);
  }
} 