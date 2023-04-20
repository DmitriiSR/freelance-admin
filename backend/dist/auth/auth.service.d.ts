import { CreateUserDto } from "../users/dto/create-user.dto";
import { UsersService } from "../users/users.service";
import { JwtService } from '@nestjs/jwt';
import { CodeService } from "../confirm_code/confirm_code.service";
import { MailService } from "../mailer/mailer.service";
export declare class AuthService {
    private userService;
    private mailService;
    private CodeService;
    private jwtService;
    private user;
    constructor(userService: UsersService, mailService: MailService, CodeService: CodeService, jwtService: JwtService);
    login(userDto: CreateUserDto): Promise<{
        token: string;
    }>;
    validateRegistration(userDto: CreateUserDto): Promise<boolean>;
    confirmRegistration(code: number): Promise<{
        token: string;
    }>;
    private generateToken;
    private validateUser;
}
