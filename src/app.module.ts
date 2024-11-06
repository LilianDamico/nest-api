import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ApiModule } from './api/api.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService): Promise<TypeOrmModuleOptions> => {
        const host = configService.get<string>('DB_HOST');
        const port = parseInt(configService.get<string>('DB_PORT'), 10);
        const username = configService.get<string>('DB_USERNAME');
        const password = configService.get<string>('DB_PASSWORD');
        const database = configService.get<string>('DB_DATABASE');

        if (!host || !port || !username || !password || !database) {
          throw new Error('Missing database configuration in environment variables');
        }

        return {
          type: 'postgres',
          host,
          port,
          username,
          password,
          database,
          entities: [__dirname + '/../**/*.entity.{js,ts}'],
          migrations: [__dirname + '/../migrations/*.{js,ts}'],
          synchronize: true,
          logging: true,
        };
      },
    }),
    ApiModule,
    AuthModule,  
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
