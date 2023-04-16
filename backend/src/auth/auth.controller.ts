import {Body, Controller, Post} from '@nestjs/common';
import {CreateUserDto} from "../users/dto/create-user.dto";
import {ConfirmCodeDto} from "../confirm_code/dto/confirm_code.dto";
import {AuthService} from "./auth.service";

@Controller('api/auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post('/login')
    login(@Body() userDto: CreateUserDto) {
        return this.authService.login(userDto)
    }

    @Post('/registration')
    validateRegistration(@Body() userDto: CreateUserDto) {
        return this.authService.validateRegistration(userDto)
    }

    @Post('/registration-confirm')
    confirmRegistration(@Body() body: ConfirmCodeDto) {
        return this.authService.confirmRegistration(+body.code)
    }

}
