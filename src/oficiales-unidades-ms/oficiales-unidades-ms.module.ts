import { Module } from '@nestjs/common';
import { OficialesUnidadesMsController } from './oficiales-unidades-ms.controller';
import { RabbitMqModule } from 'src/transportes/rabbit-mq.module';
import { RabbitMqModule2 } from 'src/transportes/rabbit-mq2.module';

@Module({
  controllers: [OficialesUnidadesMsController],
  imports: [
    RabbitMqModule2
  ]
})
export class OficialesUnidadesMsModule { }
