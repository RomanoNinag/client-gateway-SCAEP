import { Module } from '@nestjs/common';
import { OficialesUnidadesMsController } from './oficiales-unidades-ms.controller';
import { RabbitMqModule } from 'src/transportes/rabbit-mq.module';

@Module({
  controllers: [OficialesUnidadesMsController],
  imports: [
    RabbitMqModule
  ]
})
export class OficialesUnidadesMsModule { }
