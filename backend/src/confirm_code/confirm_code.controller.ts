import { Controller, Get, Post, Body } from '@nestjs/common';
import { CodeService } from './confirm_code.service';
import { ConfirmCodeDto } from './dto/confirm_code.dto'

@Controller('api/code')
export class GetCode {
  constructor(private codeService: CodeService) {}

  @Get()
  getCode(): number {
    this.codeService.generateCode()
    return this.codeService.getCode()
  }

  @Post()
  validateCode(@Body() body: ConfirmCodeDto): boolean {
    return this.codeService.validateCode(+body.code);
  }
}
