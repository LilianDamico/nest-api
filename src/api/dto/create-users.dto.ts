import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsPhoneNumber, Length, IsOptional } from 'class-validator';

export class CreateUsersDto {
  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  name: string;

  @IsEmail()
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  registro: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  address: string;

  @IsPhoneNumber()
  @ApiProperty()
  @IsOptional()  
  telefone: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  profissao: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  especialidade: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  @Length(8, 20, { message: 'Password must be between 8 and 20 characters.' })
  password: string;

  @IsString()
  @ApiProperty()
  comentarios: string;
}
