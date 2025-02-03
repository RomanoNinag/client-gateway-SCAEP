import { Module } from '@nestjs/common';
import { OficialesUnidadesMsController } from './oficiales-unidades-ms.controller';
import { RabbitMqModule } from 'src/transportes/rabbit-mq.module';
import { RabbitMqModule2 } from 'src/transportes/rabbit-mq2.module';
import { ImportDocsService } from './import-docs/import-docs.service';

@Module({
  controllers: [OficialesUnidadesMsController],
  imports: [
    RabbitMqModule2
  ],
  providers: [
    ImportDocsService
  ]
})
export class OficialesUnidadesMsModule { }
