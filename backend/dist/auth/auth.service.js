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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcryptjs");
const confirm_code_service_1 = require("../confirm_code/confirm_code.service");
let AuthService = class AuthService {
    constructor(userService, CodeService, jwtService) {
        this.userService = userService;
        this.CodeService = CodeService;
        this.jwtService = jwtService;
        this.user = null;
    }
    async login(userDto) {
        const user = await this.validateUser(userDto);
        return this.generateToken(user);
    }
    async validateRegistration(userDto) {
        console.log(userDto);
        const candidate = await this.userService.getUserByEmail(userDto.email);
        if (candidate) {
            throw new common_1.HttpException('Пользователь с таким email адресом уже существует', common_1.HttpStatus.BAD_REQUEST);
        }
        this.user = Object.assign({}, userDto);
        return true;
    }
    async confirmRegistration(code) {
        console.log(this.user);
        if (!this.CodeService.validateCode(code)) {
            throw new common_1.HttpException('Неверный код', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!this.user) {
            throw new common_1.HttpException('Полей пользователя не существует', common_1.HttpStatus.BAD_REQUEST);
        }
        const hashPassword = await bcrypt.hash(this.user.password, 5);
        const user = await this.userService.createUser(Object.assign(Object.assign({}, this.user), { password: hashPassword }));
        this.user = null;
        console.log(this.user);
        return this.generateToken(user);
    }
    async generateToken(user) {
        const payload = { email: user.email, id: user.id, full_name: user.full_name };
        return {
            token: this.jwtService.sign(payload)
        };
    }
    async validateUser(userDto) {
        const user = await this.userService.getUserByEmail(userDto.email);
        const passwordEquals = await bcrypt.compare(userDto.password, user.password);
        if (passwordEquals) {
            return user;
        }
        throw new common_1.UnauthorizedException({ message: 'Неверный пароль или email' });
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        confirm_code_service_1.CodeService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map