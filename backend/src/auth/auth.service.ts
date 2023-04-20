import { Body, HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import { CreateUserDto } from "../users/dto/create-user.dto";
import { UsersService } from "../users/users.service";
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs'
import {User} from "../users/users.model";
import {CodeService} from "../confirm_code/confirm_code.service";
import {MailService} from "../mailer/mailer.service";

@Injectable()
export class AuthService {

    private user = null;

    constructor(private userService: UsersService,
                private mailService: MailService,
                private CodeService: CodeService,
                private jwtService: JwtService) {}

    async login(userDto: CreateUserDto) {
        const user = await this.validateUser(userDto);
        return this.generateToken(user)
    }

    async validateRegistration(userDto: CreateUserDto) {
        const candidate = await this.userService.getUserByEmail(userDto.email);

        if (candidate) {
            throw new HttpException('Пользователь с таким email адресом уже существует', HttpStatus.BAD_REQUEST)
        }

        this.user = {...userDto}

        this.CodeService.generateCode();

        this.mailService.sendMail(
            this.user.email,
            'Подтверждение почты',
            `Код ${this.CodeService.getCode()}`,
        )
            .then(() => console.log('код успешно отправлен'))
            .catch((error) => console.log(error))

        return true
    }

    async confirmRegistration(code: number) {
        if (!this.CodeService.validateCode(code)) {
            throw new HttpException('Неверный код', HttpStatus.BAD_REQUEST)
        }
        if (!this.user) {
            throw new HttpException('Полей пользователя не существует', HttpStatus.BAD_REQUEST)
        }
        const hashPassword = await bcrypt.hash(this.user.password, 5);
        const user = await this.userService.createUser({...this.user, password: hashPassword})

        this.user = null;
        console.log(this.user)
        return this.generateToken(user)
    }


    private async generateToken(user: User) {
        const payload = {email: user.email, id: user.id, full_name: user.full_name}

        return {
            token: this.jwtService.sign(payload)
        }
    }


    private async validateUser(userDto: CreateUserDto) {
        const user = await this.userService.getUserByEmail(userDto.email);

        if (!user) {
            throw new UnauthorizedException({message: 'Неверный email'})
        }

        const passwordEquals = await bcrypt.compare(userDto.password, user.password);

        if (passwordEquals) {
            return user;
        }

        throw new UnauthorizedException({message: 'Неверный пароль'})
    }
}
