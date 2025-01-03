import { BadRequestException, Body, Controller, Delete, Get, Inject, InternalServerErrorException, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

import { RABBITMQ_SERVICE } from 'src/config';
import { CreateArmaDto, UpdateArmaDto } from './dto';

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
  @Get("arma/:id")
  async findOneArma(@Param('id') id: string) {
    try {
      const arma = await firstValueFrom(
        this.client.send('get.articulo.arma.id', { id }) //TODO manejo de errores: si no ponemos objeto lo encuentra
      )
      return arma;
    } catch (error) {
      console.log(error);
      if (error.status === 400) {
        throw new BadRequestException(error.message);
      } else {
        throw new InternalServerErrorException('Error desconocido al actualizar el arma.');
      }
      // throw new RpcException(error);
    }
  }
  @Patch("arma/:id")
  async updateArma(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateArma: UpdateArmaDto
  ) {
    try {
      const arma = await firstValueFrom(
        this.client.send('update.articulo.arma', { id, ...updateArma })
      )
      return arma;
    } catch (error) {
      console.log(error);
      if (error.status === 400) {
        throw new BadRequestException(error.message);
      } else {
        throw new InternalServerErrorException('Error desconocido al actualizar el arma.');
      }
      // throw new RpcException(error);
    }
  }

  @Delete("arma/:id")
  async removeArma(@Param('id', ParseUUIDPipe) id: string) {
    try {
      const arma = await firstValueFrom(
        this.client.send('delete.articulo.arma', { id }) //TODO manejo de error
      )
      return arma;
    } catch (error) {
      console.log(error);
      if (error.status === 400) {
        throw new BadRequestException(error.message);
      } else {
        throw new InternalServerErrorException('Error desconocido al eliminar el arma.');
      }
    }
  }

  // EQUIPOS  
}
