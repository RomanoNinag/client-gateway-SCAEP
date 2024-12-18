import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { RABBITMQ_SERVICE } from 'src/config';

@Controller()
export class EquipoArmamentoMsController {
  constructor(
    @Inject(RABBITMQ_SERVICE) private readonly client: ClientProxy,
  ) { }

  @Get()
  findAllArmas() {
    return this.client.send('get.armas', {});
  }
}
