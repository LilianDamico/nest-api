import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsersTable1730397425978 implements MigrationInterface {
    name = 'CreateUsersTable1730397425978'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" 
            ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
            "nome" character varying, "cpf" character varying, 
            "email" character varying, 
            "registro" character varying, 
            "endereco" character varying, 
            "telefone" character varying, 
            "profissao" character varying, 
            "especialidade" character varying, 
            "senha" character varying, 
            "comentarios" text, "createdAt" 
            TIMESTAMP NOT NULL DEFAULT now(), 
            "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), 
            CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" 
            PRIMARY KEY ("id"))`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }
}
