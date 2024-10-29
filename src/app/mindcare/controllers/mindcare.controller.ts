import {
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  Body,
} from '@nestjs/common';
import { MindcareService } from '../services/mindcare.service';
import { CreateMindCareDto } from '../dto/create-mindcare.dto';
import { UpdateMindCareDto } from '../dto/update-mindcare.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('mindcare')
@ApiTags('mindcare')
export class MindcareController {
  constructor(private readonly mindcareService: MindcareService) {}

  @Get()
  async findAll() {
    return await this.mindcareService.findAll();
  }

  @Post()
  async create(@Body() body: CreateMindCareDto) {
    return await this.mindcareService.create(body);
  }

  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.mindcareService.findOneOrFail(id);
  }

  @Put(':id')
  async update(@Param('id', new ParseUUIDPipe()) id: string, @Body() body: UpdateMindCareDto) {
    return await this.mindcareService.update(id, body);
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.mindcareService.deleteById(id);
  }
}
