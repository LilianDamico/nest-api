import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ApiModule } from './api/api.module';

@Module({
  imports: [
    ConfigModule.forRoot(), 
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService): Promise<TypeOrmModuleOptions> => {
        return {
          type: 'postgres',
          host: configService.get<string>('DB_HOST'), 
          port: parseInt(configService.get<string>('DB_PORT'), 10), 
          username: configService.get<string>('DB_USERNAME'), 
          password: configService.get<string>('DB_PASSWORD'), 
          database: configService.get<string>('DB_DATABASE'), 
          entities: [__dirname + '/../**/*.entity.{js,ts}'], 
          migrations: [__dirname + '/../migrations/*.{js,ts}'], 
          synchronize: false, 
          logging: true, 
        };
      },
    }),
    ApiModule, 
  ],
  controllers: [], 
  providers: [], 
})
export class AppModule {}
