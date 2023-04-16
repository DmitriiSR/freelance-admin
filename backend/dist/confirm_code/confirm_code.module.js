"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfirmCodeModule = void 0;
const common_1 = require("@nestjs/common");
const confirm_code_service_1 = require("./confirm_code.service");
const confirm_code_controller_1 = require("./confirm_code.controller");
let ConfirmCodeModule = class ConfirmCodeModule {
};
ConfirmCodeModule = __decorate([
    (0, common_1.Module)({
        controllers: [confirm_code_controller_1.GetCode],
        providers: [confirm_code_service_1.CodeService],
    })
], ConfirmCodeModule);
exports.ConfirmCodeModule = ConfirmCodeModule;
//# sourceMappingURL=confirm_code.module.js.map