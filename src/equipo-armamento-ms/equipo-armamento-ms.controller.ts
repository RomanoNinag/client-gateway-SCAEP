import { BadRequestException, Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

import { RABBITMQ_SERVICE } from 'src/config';
import { CreateArmaDto } from './dto';

@Controller('articulo')
export class EquipoArmamentoMsController {
  constructor(
    @Inject(RABBITMQ_SERVICE) private readonly client: ClientProxy,
  ) { }

  // ARMAS
  @Post("arma")
  async createArma(@Body() createArma: CreateArmaDto) {
    try {
      const arma = await firstValueFrom(
        this.client.send('create.articulo.arma', createArma)
      )
      return arma;
    } catch (error) {
      console.log(error);
      if (error.status === 400) {
        throw new BadRequestException(error.message);
      } else {
        throw new RpcException('Error desconocido al crear arma.');
      }

    }
  }

  @Get("arma")
  async findAllArmas() {
    try {
      const armas = await firstValueFrom(
        this.client.send('get.articulo.arma', {})
      )
      return armas
    } catch (error) {
      console.log(error);
      throw new RpcException(error);
    }
  }
  @Get("arma/referencia")
  async findAllArmasReferencia() {
    try {
      const armaref = await firstValueFrom(
        this.client.send('get.articulo.arma.referencia', {})
      )
      return armaref;
    } catch (error) {
      console.log(error);
      throw new RpcException(error);
    }
  }
}
