import { Module } from '@nestjs/common';
import { EquipoArmamentoMsController } from './equipo-armamento-ms.controller';
import { RabbitMqModule } from 'src/transportes/rabbit-mq.module';

@Module({
  controllers: [EquipoArmamentoMsController],
  imports: [
    RabbitMqModule
  ]
})
export class EquipoArmamentoMsModule { }
