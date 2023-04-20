import { Module } from '@nestjs/common';
import { CodeService } from './confirm_code.service';
import {MailService} from '../mailer/mailer.service'
import { GetCode } from './confirm_code.controller';

@Module({
    controllers: [GetCode],
    providers: [CodeService, MailService],
})
export class ConfirmCodeModule {}
