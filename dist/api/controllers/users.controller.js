"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const create_users_dto_1 = require("../dto/create-users.dto");
const update_users_dto_1 = require("../dto/update-users.dto");
const swagger_1 = require("@nestjs/swagger");
const users_service_1 = require("../services/users.service");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async findAll() {
        return await this.usersService.findAll();
    }
    async create(body) {
        return await this.usersService.create(body);
    }
    async show(id) {
        const user = await this.usersService.findOneOrFail(id);
        if (!user) {
            throw new common_1.NotFoundException('Usuário não encontrado');
        }
        return user;
    }
    async update(id, body) {
        return await this.usersService.update(id, body);
    }
    async delete(id) {
        await this.usersService.deleteById(id);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de todos os usuários.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Usuário criado com sucesso.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_users_dto_1.CreateUsersDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Usuário encontrado.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Usuário não encontrado.' }),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "show", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Usuário atualizado com sucesso.' }),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_users_dto_1.UpdateUsersDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(204),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Usuário deletado com sucesso.' }),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "delete", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    (0, swagger_1.ApiTags)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map