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
        
        const dbUrl = configService.get<string>('DB_URL');

        if (!dbUrl) {
          throw new Error('Missing database URL in environment variables');
        }

        return {
          type: 'postgres',
          url: dbUrl, // Usando a URL diretamente
          entities: [__dirname + '/../**/*.entity.{js,ts}'], 
          migrations: [__dirname + '/../migrations/*.{js,ts}'], 
          synchronize: false, 
          logging: true, 
          ssl: {
            rejectUnauthorized: false, 
          },
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
