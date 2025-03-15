import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { environment } from './config';

async function main()
{
    const logger = new Logger('Auth-Service');
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
        transport: Transport.NATS,
        options: {
            servers: environment.natsServer
        },
    });

    app.useGlobalPipes(new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true
    }));

    await app.listen();

    logger.log(`Auth-Service started listening on Nats Server: ${environment.natsServer}`);
}

main();
