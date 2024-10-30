import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MindcareModule } from './app/mindcare/mindcare.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // Certifique-se de que o módulo de configuração esteja disponível
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mariadb',
        host: configService.get('DB_HOST', 'localhost'),
        port: Number(configService.get('DB_PORT', 3306)),
        username: configService.get('DB_USERNAME', 'root'),
        password: configService.get('DB_PASSWORD', 'Lila369*'),
        database: configService.get('DB_DATABASE', 'mindcare'),
        entities: [__dirname + '/**/*.entity.{js,ts}'],
        synchronize: false, 
      }),
    }),
    MindcareModule,
  ],
})
export class AppModule {}
