import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MindcareService } from './services/mindcare.service';
import { MindCareEntity } from './entities/mindcare.entity';
import { MindcareController } from './controllers/mindcare.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MindCareEntity])],
  providers: [MindcareService],
  exports: [MindcareService],
  controllers: [MindcareController],
})
export class MindcareModule {}
