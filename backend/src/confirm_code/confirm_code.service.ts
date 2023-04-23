import { Injectable } from '@nestjs/common';

@Injectable()
export class CodeService {
    private code: number;

    constructor() {
        this.generateCode();
    }

    getCode(): number {
        return this.code;
    }

    generateCode(): void {
        this.code = Math.floor(Math.random() * 9000) + 1000;
    }

    validateCode(code: number): boolean {
        return code === this.code;
    }
}
