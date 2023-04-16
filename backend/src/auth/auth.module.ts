import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
// import {UsersService} from "../users/users.service";
import {UsersModule} from "../users/users.module";
import {CodeService} from "../confirm_code/confirm_code.service";
import {JwtModule} from "@nestjs/jwt";

@Module({
  controllers: [AuthController],
  providers: [AuthService, CodeService],
  imports: [
      UsersModule,
      JwtModule.register({
        secret: process.env.PRIVATE_KEY || 'SECRET_KEY',
        signOptions: {
          expiresIn: '24h'
        }
      })
  ]
})
export class AuthModule {}
