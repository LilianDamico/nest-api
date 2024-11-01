import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './app/users/users.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot(), // Carrega variáveis de ambiente do .env
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService): TypeOrmModuleOptions => {
        const dbConfig: TypeOrmModuleOptions = {
          type: 'postgres',
          host: configService.get<string>('DATABASE_HOST'), // Obtém o host do banco de dados
          port: parseInt(configService.get<string>('DATABASE_PORT'), 10), // Obtém a porta do banco de dados
          username: configService.get<string>('DATABASE_USER'), // Obtém o usuário do banco de dados
          password: configService.get<string>('DATABASE_PASS'), // Obtém a senha do banco de dados
          database: configService.get<string>('DATABASE_NAME'), // Obtém o nome do banco de dados
          entities: [__dirname + '/**/*.entity.{js,ts}'], // Localização das entidades
          synchronize: true, 
          logging: true, // Habilita logs para debug
        };

        return dbConfig;
      },
    }),
    UsersModule, // Seu módulo de usuários
  ],
  controllers: [AppController], // Controllers da aplicação
})
export class AppModule {}

