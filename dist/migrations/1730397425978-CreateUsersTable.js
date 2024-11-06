"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsersTable1730397425978 = void 0;
class CreateUsersTable1730397425978 {
    constructor() {
        this.name = 'CreateUsersTable1730397425978';
    }
    async up(queryRunner) {
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
            PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "users"`);
    }
}
exports.CreateUsersTable1730397425978 = CreateUsersTable1730397425978;
//# sourceMappingURL=1730397425978-CreateUsersTable.js.map