import { CreateUserDto } from "../users/dto/create-user.dto";
import { UsersService } from "../users/users.service";
import { JwtService } from '@nestjs/jwt';
import { CodeService } from "../confirm_code/confirm_code.service";
export declare class AuthService {
    private userService;
    private CodeService;
    private jwtService;
    private user;
    constructor(userService: UsersService, CodeService: CodeService, jwtService: JwtService);
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
