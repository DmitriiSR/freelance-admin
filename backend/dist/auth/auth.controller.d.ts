import { CreateUserDto } from "../users/dto/create-user.dto";
import { ConfirmCodeDto } from "../confirm_code/dto/confirm_code.dto";
import { AuthService } from "./auth.service";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(userDto: CreateUserDto): Promise<{
        token: string;
    }>;
    validateRegistration(userDto: CreateUserDto): Promise<boolean>;
    confirmRegistration(body: ConfirmCodeDto): Promise<{
        token: string;
    }>;
}
