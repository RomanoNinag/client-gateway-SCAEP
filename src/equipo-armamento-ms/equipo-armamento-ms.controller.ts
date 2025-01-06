import { BadRequestException, Body, Controller, Delete, Get, Inject, InternalServerErrorException, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

import { RABBITMQ_SERVICE } from 'src/config';
import { CreateArmaDto, CreateEquipoDto, UpdateArmaDto, UpdateEquipoDto } from './dto';


@Controller('articulo')
export class EquipoArmamentoMsController {
  constructor(
    @Inject(RABBITMQ_SERVICE) private readonly client: ClientProxy,
  ) { }

  // SEED
  @Get("seed")
  async seed() {
    try {
      const seed = await firstValueFrom(
        this.client.send('seed.articulo', {})
      )
      return seed;
    } catch (error) {
      console.log(error);
      throw new RpcException(error);
    }
  }
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
  @Get("arma/referencia/marca")
  async findAllArmasReferenciaMarca() {
    try {
      const armaref = await firstValueFrom(
        this.client.send('get.articulo.arma.referencia.marca', {})
      )
      return armaref;
    } catch (error) {
      console.log(error);
      throw new RpcException(error);
    }
  }

  @Get("arma/referencia/modelo")
  async findAllArmasReferenciaModelo() {
    try {
      const armaref = await firstValueFrom(
        this.client.send('get.articulo.arma.referencia.modelo', {})
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
  @Post("equipo")
  async createEquipo(@Body() createEquipo: CreateEquipoDto) {
    try {
      const equipo = await firstValueFrom(
        this.client.send('create.articulo.equipo', createEquipo)
      )
      return equipo;
    } catch (error) {
      console.log(error);
      if (error.status === 400) {
        throw new BadRequestException(error.message);
      } else {
        throw new RpcException('Error desconocido al crear equipo.');
      }

    }
  }

  @Get("equipo")
  async findAllEquipos() {
    try {
      const equipos = await firstValueFrom(
        this.client.send('get.articulo.equipo', {})
      )
      return equipos
    } catch (error) {
      console.log(error);
      throw new RpcException(error);
    }
  }

  @Get("equipo/referencia")
  async findAllEquiposReferencia() {
    try {
      const equiporef = await firstValueFrom(
        this.client.send('get.articulo.equipo.referencia', {})
      )
      return equiporef;
    } catch (error) {
      console.log(error);
      throw new RpcException(error);
    }
  }
  @Get("equipo/referencia/marca")
  async findAllEquiposReferenciaMarca() {
    try {
      const equiporef = await firstValueFrom(
        this.client.send('get.articulo.equipo.referencia.marca', {})
      )
      return equiporef;
    } catch (error) {
      console.log(error);
      throw new RpcException(error);
    }
  }
  @Get("equipo/referencia/modelo")
  async findAllEquiposReferenciaModelo() {
    try {
      const equiporef = await firstValueFrom(
        this.client.send('get.articulo.equipo.referencia.modelo', {})
      )
      return equiporef;
    } catch (error) {
      console.log(error);
      throw new RpcException(error);
    }
  }
  @Get("equipo/:id")
  async findOneEquipo(@Param('id', ParseUUIDPipe) id: string) {
    try {
      const equipo = await firstValueFrom(
        this.client.send('get.articulo.equipo.id', { id }) //TODO manejo de errores: si no ponemos objeto lo encuentra
      )
      return equipo;
    } catch (error) {
      console.log(error);
      if (error.status === 400) {
        throw new BadRequestException(error.message);
      } else {
        throw new InternalServerErrorException('Error desconocido al encontrar el equipo.');
      }
    }
  }

  @Patch("equipo/:id")
  async updateEquipo(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateEquipo: UpdateEquipoDto
  ) {
    try {
      const equipo = await firstValueFrom(
        this.client.send('update.articulo.equipo', { id, ...updateEquipo })
      )
      return equipo;
    } catch (error) {
      console.log(error);
      if (error.status === 400) {
        throw new BadRequestException(error.message);
      } else {
        throw new InternalServerErrorException('equipo Error desconocido al actualizar el equipo.');
      }
    }
  }
  @Delete("equipo/:id")
  async removeEquipo(@Param('id', ParseUUIDPipe) id: string) {
    try {
      const equipo = await firstValueFrom(
        this.client.send('delete.articulo.equipo', { id }) //TODO manejo de error
      )
      return equipo;
    } catch (error) {
      console.log(error);
      if (error.status === 400) {
        throw new BadRequestException(error.message);
      } else {
        throw new InternalServerErrorException('Error desconocido al eliminar el equipo.');
      }
    }
  }
}
