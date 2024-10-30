import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';

async function bootstrap() {
  
  dotenv.config();
  console.log(process.env.DB_HOST, process.env.DB_USERNAME, process.env.DB_PASSWORD);


  const app = await NestFactory.create(AppModule);

  
  const config = new DocumentBuilder()
    .setTitle('MindCareApp API')
    .setDescription('API para gerenciamento do MindCare')
    .setVersion('1.0')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  
  app.useGlobalPipes(new ValidationPipe());

  
  await app.listen(process.env.PORT || 3000);
}

bootstrap();
