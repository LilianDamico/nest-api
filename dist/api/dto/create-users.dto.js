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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsersDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateUsersDto {
}
exports.CreateUsersDto = CreateUsersDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUsersDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateUsersDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUsersDto.prototype, "registro", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUsersDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsPhoneNumber)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateUsersDto.prototype, "telefone", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUsersDto.prototype, "profissao", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUsersDto.prototype, "especialidade", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(8, 20, { message: 'Password must be between 8 and 20 characters.' }),
    __metadata("design:type", String)
], CreateUsersDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateUsersDto.prototype, "comentarios", void 0);
//# sourceMappingURL=create-users.dto.js.map