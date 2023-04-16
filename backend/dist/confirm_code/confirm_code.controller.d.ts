import { CodeService } from './confirm_code.service';
import { ConfirmCodeDto } from './dto/confirm_code.dto';
export declare class GetCode {
    private codeService;
    constructor(codeService: CodeService);
    getCode(): number;
    validateCode(body: ConfirmCodeDto): boolean;
}
