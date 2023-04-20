"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const users_module_1 = require("./users/users.module");
const config_1 = require("@nestjs/config");
const users_model_1 = require("./users/users.model");
const auth_module_1 = require("./auth/auth.module");
const confirm_code_module_1 = require("./confirm_code/confirm_code.module");
const serve_static_1 = require("@nestjs/serve-static");
const core_1 = require("@nestjs/core");
const path = require("path");
const mailer_1 = require("@nestjs-modules/mailer");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [
            {
                provide: 'APP_FILTER',
                useClass: core_1.BaseExceptionFilter,
            },
        ],
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: `.${process.env.NODE_ENV}.env`
            }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'postgres',
                host: process.env.POSTGRES_HOST,
                port: Number(process.env.POSTGRES_PORT),
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                database: process.env.POSTGRES_DB,
                models: [users_model_1.User],
                autoLoadModels: true
            }),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            confirm_code_module_1.ConfirmCodeModule,
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path.join(__dirname, '../../', 'frontend', 'dist'),
                exclude: ['/api*'],
            }),
            mailer_1.MailerModule.forRoot({
                transport: {
                    host: 'smtp.gmail.com',
                    port: 587,
                    secure: false,
                    auth: {
                        user: 'd.ryabukhin0509@gmail.com',
                        pass: 'jcspteypvmbtycyh',
                    },
                },
            }),
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map