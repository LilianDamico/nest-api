// src/api/api.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { UsersEntity } from './entities/users.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UsersEntity]), 
  ],
  controllers: [UsersController],
  exports: [UsersService],  
  providers: [UsersService],
})
export class ApiModule {}
