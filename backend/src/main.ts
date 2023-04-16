import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";

async function start() {
  const PORT = process.env.PORT ?? 80;
  const HOST = process.env.HOST ?? '194.67.116.54';
  const app = await NestFactory.create(AppModule)

  app.listen(PORT, HOST).then(() => console.log(`server starts on port ${PORT}`))
}

start()
