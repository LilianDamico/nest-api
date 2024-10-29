import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { MindCareEntity } from '../entities/mindcare.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMindCareDto } from '../dto/create-mindcare.dto';
import { UpdateMindCareDto } from '../dto/update-mindcare.dto';

@Injectable()
export class MindcareService {
  constructor(
    @InjectRepository(MindCareEntity)
    private readonly mindcareRepository: Repository<MindCareEntity>,
  ) {}

  async findAll(): Promise<MindCareEntity[]> {
    return await this.mindcareRepository.find();
  }

  async findOneOrFail(id: string): Promise<MindCareEntity> {
    const mindcare = await this.mindcareRepository.findOne({ where: { id } });
    if (!mindcare) {
      throw new NotFoundException('MindCare entity not found');
    }
    return mindcare;
  }

  async create(data: CreateMindCareDto): Promise<MindCareEntity> {
    const newMindcare = this.mindcareRepository.create(data);
    return await this.mindcareRepository.save(newMindcare);
  }

  async update(
    id: string,
    data: UpdateMindCareDto,
  ): Promise<MindCareEntity> {
    const mindcare = await this.findOneOrFail(id);

    this.mindcareRepository.merge(mindcare, data);
    return await this.mindcareRepository.save(mindcare);
  }


  async deleteById(id: string): Promise<void> {
    await this.findOneOrFail(id);
    await this.mindcareRepository.softDelete(id);
  }
}
