import { Module } from '@nestjs/common';
import { EquipoArmamentoMsService } from './equipo-armamento-ms.service';
import { EquipoArmamentoMsController } from './equipo-armamento-ms.controller';
import { RabbitMqModule } from 'src/transportes/rabbit-mq.module';

@Module({
  controllers: [EquipoArmamentoMsController],
  providers: [EquipoArmamentoMsService],
  imports: [
    RabbitMqModule
  ]
})
export class EquipoArmamentoMsModule { }
