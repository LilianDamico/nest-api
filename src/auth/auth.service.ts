import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service'; // Certifique-se de que o serviço de usuários está correto
import { User } from '../users/user.entity'; // Importando a entidade User

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, senha: string): Promise<User | null> {
    const user = await this.usersService.findByEmail(email);
    if (user && user.senha === senha) { // Verifique a senha de forma segura em produção
      return user;
    }
    return null;
  }

  async login(user: User) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
