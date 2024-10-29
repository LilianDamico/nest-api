import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'users' })
export class MindCareEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  registro: string;

  @Column()
  address: string;

  @Column()
  telefone: string;

  @Column()
  profissao: string;

  @Column()
  especialidade: string;

  @Column()
  password: string;

  @Column('text')
  comentarios: string;
}
