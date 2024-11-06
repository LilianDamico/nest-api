import { Repository } from 'typeorm';
import { UsersEntity } from '../entities/users.entity';
import { CreateUsersDto } from '../dto/create-users.dto';
import { UpdateUsersDto } from '../dto/update-users.dto';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<UsersEntity>);
    findAll(): Promise<UsersEntity[]>;
    findOneOrFail(id: string): Promise<UsersEntity>;
    findByEmail(email: string): Promise<UsersEntity | null>;
    create(data: CreateUsersDto): Promise<UsersEntity>;
    update(id: string, data: UpdateUsersDto): Promise<UsersEntity>;
    deleteById(id: string): Promise<void>;
}
