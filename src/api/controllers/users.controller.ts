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
  NotFoundException,
} from '@nestjs/common';
import { CreateUsersDto } from '../dto/create-users.dto';
import { UpdateUsersDto } from '../dto/update-users.dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { UsersService } from '../services/users.service';
import { UsersModel } from '../models/users.model'; 

@Controller('users')
@ApiTags('users')
export class UsersController {
  
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'Lista de todos os usuários.' })
  async findAll(): Promise<UsersModel[]> {
    return await this.usersService.findAll();
  }

  @Post()
  @ApiResponse({ status: 201, description: 'Usuário criado com sucesso.' })
  async create(@Body() body: CreateUsersDto): Promise<UsersModel> {
    return await this.usersService.create(body);
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Usuário encontrado.' })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado.' })
  async show(@Param('id', new ParseUUIDPipe()) id: string): Promise<UsersModel> {
    const user = await this.usersService.findOneOrFail(id);
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return user;
  }

  @Put(':id')
  @ApiResponse({ status: 200, description: 'Usuário atualizado com sucesso.' })
  async update(
    @Param('id', new ParseUUIDPipe()) id: string, 
    @Body() body: UpdateUsersDto,
  ): Promise<UsersModel> {
    return await this.usersService.update(id, body);
  }
  
  @Delete(':id')
  @HttpCode(204)
  @ApiResponse({ status: 204, description: 'Usuário deletado com sucesso.' })
  async delete(@Param('id', new ParseUUIDPipe()) id: string): Promise<void> {
    await this.usersService.deleteById(id);
  } 
}
