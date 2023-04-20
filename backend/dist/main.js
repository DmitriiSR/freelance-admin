"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function start() {
    const PORT = process.env.PORT;
    const HOST = process.env.HOST;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.listen(PORT, HOST).then(() => console.log(`server starts on port ${PORT}`));
}
start();
//# sourceMappingURL=main.js.map