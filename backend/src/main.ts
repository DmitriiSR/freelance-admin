import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";

async function start() {
  const PORT = process.env.PORT ?? 5000;
  const HOST = process.env.HOST ?? 'frelance-admin';
  const app = await NestFactory.create(AppModule)

  app.listen(PORT, HOST).then(() => console.log(`server starts on port ${PORT}`))
}

start()