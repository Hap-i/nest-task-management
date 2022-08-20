import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { SwaggerModule } from '@nestjs/swagger';
import {
  swaggerDocumentOptions,
  swaggerPath,
  swaggerSetupOptions,
} from './swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3003',
    credentials: true,
  });
  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser());
  const document = SwaggerModule.createDocument(app, swaggerDocumentOptions);
  SwaggerModule.setup(swaggerPath, app, document, swaggerSetupOptions);
  await app.listen(3000);
}
bootstrap();
