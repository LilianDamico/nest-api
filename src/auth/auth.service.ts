import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../api/services/users.service';
import { UsersEntity } from '../api/entities/users.entity';
import * as bcrypt from 'bcrypt';  // Verifique a importação de bcrypt

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, senha: string): Promise<UsersEntity | null> {
    const user = await this.usersService.findByEmail(email);
    if (user && await bcrypt.compare(senha, user.senha)) {
      return user;
    }
    return null;
  }

  async login(user: UsersEntity) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
