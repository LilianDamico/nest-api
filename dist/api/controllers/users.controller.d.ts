import { CreateUsersDto } from '../dto/create-users.dto';
import { UpdateUsersDto } from '../dto/update-users.dto';
import { UsersService } from '../services/users.service';
import { UsersModel } from '../models/users.model';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<UsersModel[]>;
    create(body: CreateUsersDto): Promise<UsersModel>;
    show(id: string): Promise<UsersModel>;
    update(id: string, body: UpdateUsersDto): Promise<UsersModel>;
    delete(id: string): Promise<void>;
}
