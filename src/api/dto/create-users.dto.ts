import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';
import { IsNotEmpty } from 'class-validator';
import { IsString } from 'class-validator';
import { IsPhoneNumber } from 'class-validator';
import { Length } from 'class-validator';

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

  @IsPhoneNumber('BR') 
  @ApiProperty()
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
  @Length(8, 20) 
  password: string; 

  @IsString()
  @ApiProperty()
  comentarios: string; 
}