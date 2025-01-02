import { Controller, Get, Post, Body, Patch, Param, Delete, Inject, HttpStatus, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { RABBITMQ_SERVICE } from 'src/config';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { CreateOficialeDto, CreateUnidadDto } from './dto';
import { catchError, first, firstValueFrom } from 'rxjs';

@Controller('oficiales-unidades-ms')
export class OficialesUnidadesMsController {
  constructor(
    @Inject(RABBITMQ_SERVICE) private readonly client: ClientProxy,
  ) { }

  @Post('unidad')
  async create(@Body() createUnidad: CreateUnidadDto) {
    // return this.client.send('crear.unidad', createUnidad)
    //   .pipe(
    //     catchError(err => { throw new RpcException(err) }),
    //   );
    try {
      const unidad = await firstValueFrom(
        this.client.send('crear.unidad', createUnidad),
      )
      return unidad;

    } catch (error) {
      console.log(error);
      if (error.status === 400) {
        // Lanzar una excepción HTTP adecuada
        throw new BadRequestException(error.message);
      } else {
        // Si no es un status manejado, lanzamos un error interno
        throw new RpcException('Error desconocido al crear la unidad.');
      }

    }
  }

  @Get('unidad')
  async findAll() {
    // console.log('Llega al controlador');

    try {
      const unidades = await firstValueFrom(
        this.client.send('get.unidades', {}),
      )
      return unidades;

    } catch (error) {
      console.log(error);

      throw new RpcException(error);
    }
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.oficialesUnidadesMsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateOficialesUnidadesMDto: UpdateOficialesUnidadesMDto) {
  //   return this.oficialesUnidadesMsService.update(+id, updateOficialesUnidadesMDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.oficialesUnidadesMsService.remove(+id);
  // }

  @Post('oficial')
  async createOficial(@Body() createOficialDto: CreateOficialeDto) {
    try {
      const oficial = await firstValueFrom(
        this.client.send('crear.oficial', createOficialDto),
      )
      return oficial;

    } catch (error) {
      console.log(error);
      if (error.status === 400) {
        // Lanzar una excepción HTTP adecuada
        throw new BadRequestException(error.message);
      } else {
        // Si no es un status manejado, lanzamos un error interno
        throw new InternalServerErrorException('Error desconocido al crear el oficial.');
      }
    }
  }

  @Get('oficial')
  async findAllOficiales() {
    try {
      const oficiales = await firstValueFrom(
        this.client.send('get.oficiales', {}),
      )
      return oficiales;

    } catch (error) {
      console.log(error);

      throw new RpcException(error);
    }
  }

  // seed
  @Get('seed')
  async seed() {
    try {
      const seed = await firstValueFrom(
        this.client.send('seed.ofi-uni', {}),
      )
      return seed;

    } catch (error) {
      console.log(error);

      throw new RpcException(error);
    }
  }


}
