import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from '../users/users.module'; // Importando o módulo de usuários

@Module({
  imports: [
    UsersModule, // Importa o módulo de usuários
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'seu-segredo', // Substitua pelo seu segredo
      signOptions: { expiresIn: '1h' }, // Tempo de expiração do token
    }),
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
