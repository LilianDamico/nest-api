import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('users')
export class UsersEntity {
  @PrimaryGeneratedColumn('uuid') 
  id: string;

  @Column({ nullable: true })
  nome: string;

  @Column({ nullable: true })
  cpf: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  registro: string;

  @Column({ nullable: true })
  endereco: string;

  @Column({ nullable: true })
  telefone: string;

  @Column({ nullable: true })
  profissao: string;

  @Column({ nullable: true })
  especialidade: string;

  @Column({ nullable: true })
  senha: string;

  @Column({ type: 'text', nullable: true })
  comentarios: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
