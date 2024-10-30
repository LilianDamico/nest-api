import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './app/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService): TypeOrmModuleOptions => {
        const dbConfig: TypeOrmModuleOptions = {
          type: 'postgres',
          host: configService.get<string>('DB_HOST', 'localhost'),
          port: configService.get<number>('DB_PORT', 5432),
          username: configService.get<string>('DB_USERNAME', 'postgres'),
          password: configService.get<string>('DB_PASSWORD', 'your-password'),
          database: configService.get<string>('DB_DATABASE', 'mindcare'),
          entities: [__dirname + '/**/*.entity.{js,ts}'],
          synchronize: true,
          logging: true,
        };
      
        console.log('Database Config:', dbConfig);
      
        return dbConfig;
      },
      
    }),
    UsersModule,
  ],
})
export class AppModule {}