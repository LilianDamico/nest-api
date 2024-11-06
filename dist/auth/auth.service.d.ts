import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../api/services/users.service';
import { UsersEntity } from '../api/entities/users.entity';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, senha: string): Promise<UsersEntity | null>;
    login(user: UsersEntity): Promise<{
        access_token: string;
    }>;
}
