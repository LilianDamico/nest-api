import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsPhoneNumber, Length, IsOptional } from 'class-validator';

export class CreateUsersDto {
  @IsNotEmpty({ message: 'Name must be a non-empty string.' })
  @ApiProperty()
  @IsString()
  name: string;

  @IsEmail({}, { message: 'Please provide a valid email address.' })
  @ApiProperty()
  email: string;

  @IsNotEmpty({ message: 'Registro must be a non-empty string.' })
  @ApiProperty()
  @IsString()
  registro: string;

  @IsNotEmpty({ message: 'Address must be a non-empty string.' })
  @ApiProperty()
  @IsString()
  address: string;

  @IsPhoneNumber('BR', { message: 'Please provide a valid phone number.' })
  @ApiProperty()
  @IsOptional()  // Se o telefone for opcional
  telefone: string;

  @IsNotEmpty({ message: 'Profissao must be a non-empty string.' })
  @ApiProperty()
  @IsString()
  profissao: string;

  @IsNotEmpty({ message: 'Especialidade must be a non-empty string.' })
  @ApiProperty()
  @IsString()
  especialidade: string;

  @IsNotEmpty({ message: 'Password must be a non-empty string.' })
  @ApiProperty()
  @IsString()
  @Length(8, 20, { message: 'Password must be between 8 and 20 characters.' })
  password: string;

  @IsString({ message: 'Comentarios must be a string.' })
  @ApiProperty()
  comentarios: string;
}
