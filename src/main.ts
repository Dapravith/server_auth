/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api');
    app.use(cookieParser());
    app.enableCors({
        origin: ['http://localhost:3000', 'http://localhost:8080', 'http://localhost:4200'],
        credentials: true
    })

    await app.listen(8000);
}

bootstrap();
