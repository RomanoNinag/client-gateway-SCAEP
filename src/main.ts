import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {

  const logger = new Logger('Client Gateway');

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )

  app.enableCors({
    origin: '*', // Permite cualquier origen. Cambia '*' por una URL específica para mayor seguridad.
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Permite el envío de cookies en las solicitudes
  });

  // console.log('Client Gateway running on http://localhost:3000');
  // console.log('Client Gateway running final final prove');

  logger.log('Client Gateway running 99999999999999999999');

  await app.listen(3000);
}
bootstrap();
