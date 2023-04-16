import {Module} from "@nestjs/common";
// import {SequelizeModule} from "@nestjs/sequelize";
// import { UsersModule } from './users/users.module';
// import { ConfigModule } from '@nestjs/config';
// import { User } from './users/users.model';
// import { AuthModule } from './auth/auth.module';
// import { ConfirmCodeModule } from './confirm_code/confirm_code.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { BaseExceptionFilter } from '@nestjs/core';
import * as path from 'path';

@Module({
    controllers: [],
    providers: [
        {
            provide: 'APP_FILTER',
            useClass: BaseExceptionFilter,
        },
    ],
    imports: [
        // ConfigModule.forRoot({
        //     envFilePath: `.${process.env.NODE_ENV}.env`
        // }),
        // SequelizeModule.forRoot({
        //     dialect: 'postgres',
        //     host: process.env.POSTGRES_HOST,
        //     port: Number(process.env.POSTGRES_PORT),
        //     username: process.env.POSTGRES_USER,
        //     password: process.env.POSTGRES_PASSWORD,
        //     database: process.env.POSTGRES_DB,
        //     models: [User],
        //     autoLoadModels: true
        // }),
        // UsersModule,
        // AuthModule,
        // ConfirmCodeModule,
        ServeStaticModule.forRoot({
            rootPath: path.join(__dirname, '../../', 'frontend', 'dist'),
            exclude: ['/api*'], // исключаем все маршруты, начинающиеся с "/api"
        }),
    ]
})
export class AppModule {}
