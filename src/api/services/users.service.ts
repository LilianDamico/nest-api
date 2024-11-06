// src/api/services/users.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersEntity } from '../entities/users.entity';
import { CreateUsersDto } from '../dto/create-users.dto';
import { UpdateUsersDto } from '../dto/update-users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>,
  ) {}

  // Busca todos os usuários
  async findAll(): Promise<UsersEntity[]> {
    return this.usersRepository.find();
  }

  // Busca um usuário por ID ou lança uma exceção
  async findOneOrFail(id: string): Promise<UsersEntity> {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User entity not found');
    }
    return user;
  }

  // Busca um usuário pelo email
  async findByEmail(email: string): Promise<UsersEntity | null> {
    const user = await this.usersRepository.findOne({ where: { email } });
    if (!user) {
      return null; // Retorna null se o usuário não for encontrado
    }
    return user;
  }

  // Cria um novo usuário
  async create(data: CreateUsersDto): Promise<UsersEntity> {
    const newUser = this.usersRepository.create(data);
    return await this.usersRepository.save(newUser);
  }

  // Atualiza as informações de um usuário
  async update(id: string, data: UpdateUsersDto): Promise<UsersEntity> {
    const user = await this.findOneOrFail(id);
    this.usersRepository.merge(user, data);
    return await this.usersRepository.save(user);
  }

  // Deleta um usuário por ID
  async deleteById(id: string): Promise<void> {
    await this.findOneOrFail(id);
    await this.usersRepository.softDelete(id);
  }
}
