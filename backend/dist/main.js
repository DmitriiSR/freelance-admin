"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function start() {
    var _a, _b;
    const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 5000;
    const HOST = (_b = process.env.HOST) !== null && _b !== void 0 ? _b : '194.67.116.54';
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.listen(PORT, HOST).then(() => console.log(`server starts on port ${PORT}`));
}
start();
//# sourceMappingURL=main.js.map