import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ApiModule } from './api/api.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // Carrega variáveis de ambiente do .env
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService): Promise<TypeOrmModuleOptions> => {
        return {
          type: 'postgres',
<<<<<<< HEAD
          host: configService.get<string>('DB_HOST'),
          port: configService.get<number>('DB_PORT'),
          username: configService.get<string>('DB_USERNAME'),
          password: configService.get<string>('DB_PASSWORD'),
          database: configService.get<string>('DB_DATABASE'),
          entities: [__dirname + '/../**/*.entity.{js,ts}'],
          migrations: [__dirname + '/../migrations/*.{js,ts}'], // Aqui são carregadas as migrações
          synchronize: false, 
          logging: true,
=======
          host: configService.get<string>('DATABASE_HOST'), // Obtém o host do banco de dados
          port: parseInt(configService.get<string>('DATABASE_PORT'), 10), // Obtém a porta do banco de dados
          username: configService.get<string>('DATABASE_USER'), // Obtém o usuário do banco de dados
          password: configService.get<string>('DATABASE_PASS'), // Obtém a senha do banco de dados
          database: configService.get<string>('DATABASE_NAME'), // Obtém o nome do banco de dados
          entities: [__dirname + '/**/*.entity.{js,ts}'], // Localização das entidades
          synchronize: true, 
          logging: true, // Habilita logs para debug
>>>>>>> 351d0674c3fa49338dffca25a2cafb914a89c83b
        };
      },
      
    }),
<<<<<<< HEAD
    ApiModule,
  ],
=======
    UsersModule, // Seu módulo de usuários
  ],
  controllers: [AppController], // Controllers da aplicação
>>>>>>> 351d0674c3fa49338dffca25a2cafb914a89c83b
})
export class AppModule {}

