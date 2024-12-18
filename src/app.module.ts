import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EquipoArmamentoMsModule } from './equipo-armamento-ms/equipo-armamento-ms.module';
import { RabbitMqModule } from './transportes/rabbit-mq.module';
import { OficialesUnidadesMsModule } from './oficiales-unidades-ms/oficiales-unidades-ms.module';

@Module({
  imports: [EquipoArmamentoMsModule, RabbitMqModule, OficialesUnidadesMsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
