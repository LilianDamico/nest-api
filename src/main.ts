import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
import { Logger } from '@nestjs/common';  

async function bootstrap() {
  
  dotenv.config();

  
  if (!process.env.DB_HOST || !process.env.DB_USERNAME || !process.env.DB_PASSWORD) {
    Logger.error('Database environment variables not set. Exiting...');
    process.exit(1);  
  }

  const app = await NestFactory.create(AppModule);

  
  app.enableCors({
    origin: process.env.CORS_ORIGIN || '*', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', 
    allowedHeaders: 'Content-Type, Authorization', 
  });

  
  if (process.env.NODE_ENV !== 'production') {
    const config = new DocumentBuilder()
      .setTitle('MindCareApp API')
      .setDescription('API para gerenciamento do MindCare')
      .setVersion('1.0')
      .addBearerAuth()  
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);  
  }


  app.useGlobalPipes(new ValidationPipe({
    transform: true,  
    whitelist: true, 
    forbidNonWhitelisted: true,  
  }));

  
  await app.listen(process.env.PORT || 3000);

  Logger.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
