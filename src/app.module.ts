import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './app/users/users.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService): TypeOrmModuleOptions => {
        const dbConfig: TypeOrmModuleOptions = {
          type: 'postgres',
          url: //mindcare_l8ig_user:Sa2ynqJU7OnTnydPf0n2z5TqL0QSeqBC@dpg-csi0d0dds78s73e9fbp0-a/mindcare_l8ig,
          ssl: {
            rejectUnauthorized: false,
          },
          entities: [__dirname + '/**/*.entity.{js,ts}'],
          synchronize: true,
          logging: true,
        };

        return dbConfig;
      },
    }),
    UsersModule,
  ],
  controllers:[AppController]
})
export class AppModule {}
