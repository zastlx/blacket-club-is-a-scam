import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

import { ValidationPipe } from "@nestjs/common";
import { useContainer } from "class-validator";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.enableCors({
        origin: [
            "*"
        ],
        credentials: true
    });

    app.useGlobalPipes(new ValidationPipe({ forbidNonWhitelisted: true, whitelist: true }));

    app.setGlobalPrefix("/api");

    useContainer(app.select(AppModule), { fallbackOnErrors: true });

    await app.listen(3000);
}

bootstrap();
