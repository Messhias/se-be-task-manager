import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Task Management API')
    .setDescription('A RESTful API for managing tasks with NestJS, PostgreSQL, and Redis')
    .setVersion('1.0')
    .addTag('tasks')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document, {
    customSiteTitle: 'Task Manager API Documentation',
    customCss: '.swagger-ui .topbar { display: none }',
    customfavIcon: 'https://nestjs.com/img/favicon.ico',
  });

  await app.listen(3000);
}
bootstrap();