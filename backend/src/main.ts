import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";

async function start() {
  const PORT = process.env.PORT;
  const HOST = process.env.HOST;
  const app = await NestFactory.create(AppModule)

  app.listen(PORT, HOST).then(() => console.log(`server starts on port ${PORT}`))
}

start()
