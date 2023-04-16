import { Module } from '@nestjs/common';
import { CodeService } from './confirm_code.service';
import { GetCode } from './confirm_code.controller';

@Module({
    controllers: [GetCode],
    providers: [CodeService],
})
export class ConfirmCodeModule {}
