import { Controller, Get, Post, Body, Patch, Param, Delete, Inject, HttpStatus, BadRequestException, InternalServerErrorException, ParseUUIDPipe } from '@nestjs/common';
import { RABBITMQ_SERVICE } from 'src/config';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { CreateOficialeDto, CreateUnidadDto } from './dto';
import { catchError, first, firstValueFrom } from 'rxjs';
import { CreateFunTieneArmaDto } from './dto/create-fun-tiene-arma.dto';
import { UpdateFunTieneArmaDto } from './dto/update-fun-tiene-arma.dto';
import { CreateUniTieneArmaDto } from './dto/create-uni-tiene-arma.dto';
import { CreateUniTieneEquipoDto } from './dto/create-uni-tiene-equipo.dto';

@Controller('ofiuni')
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
      this.handleHttpErrors(error);
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
      this.handleHttpErrors(error);
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

  // OFICIALES
  @Post('oficial')
  async createOficial(@Body() createOficialDto: CreateOficialeDto) {
    try {
      const oficial = await firstValueFrom(
        this.client.send('crear.oficial', createOficialDto),
      )
      return oficial;

    } catch (error) {
      this.handleHttpErrors(error);
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
      this.handleHttpErrors(error);
    }
  }
  @Get('oficial/:id')
  async findOneOficial(
    @Param('id', ParseUUIDPipe) id: string
  ) {
    try {
      const oficial = await firstValueFrom(
        this.client.send('get.oficial.id', { id }),
      )
      return oficial;
    } catch (error) {
      this.handleHttpErrors(error);
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

  // FUNCIANARIO TIENE ARMA
  @Post('funtienearma')
  async createFunTieneArma(@Body() createFunTieneArmaDto: CreateFunTieneArmaDto) {
    try {
      const funTieneArma = await firstValueFrom(
        this.client.send('crear.ofiuni.funTieneArma', createFunTieneArmaDto),
      )
      return funTieneArma;

    } catch (error) {
      this.handleHttpErrors(error);
    }
  }

  @Get('funtienearma')
  async findAllFunTieneArma() {
    try {
      const funTieneArma = await firstValueFrom(
        this.client.send('get.ofiuni.funTieneArma', {}),
      )
      return funTieneArma;

    } catch (error) {
      this.handleHttpErrors(error);
    }
  }
  @Get('funtienearma/rp')
  async findAllFunTieneArmaRP() {
    try {
      const funTieneArma = await firstValueFrom(
        this.client.send('get.ofiuni.funTieneArma.rp', {}),
      )
      return funTieneArma;

    } catch (error) {
      this.handleHttpErrors(error);
    }
  }
  @Get('funtienearma/srp')
  async findAllFunTieneArmaSRP() {
    try {
      const funTieneArma = await firstValueFrom(
        this.client.send('get.ofiuni.funTieneArma.srp', {}),
      )
      return funTieneArma;

    } catch (error) {
      this.handleHttpErrors(error);
    }
  }
  @Get('funtienearma/:id')
  async findOneFunTieneArma(
    @Param('id', ParseUUIDPipe) id: string
  ) {
    try {
      const funTieneArma = await firstValueFrom(
        this.client.send('get.ofiuni.funTieneArma.id', { id }),
      )
      return funTieneArma;
    } catch (error) {
      console.log(error);
      this.handleHttpErrors(error);
    }
  }

  @Patch('funtienearma/:id')
  async updateFunTieneArma(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateFunTieneArmaDto: UpdateFunTieneArmaDto
  ) {
    try {
      const funTieneArma = await firstValueFrom(
        this.client.send('update.ofiuni.funTieneArma', { id, ...updateFunTieneArmaDto }),
      )
      return funTieneArma;

    } catch (error) {
      this.handleHttpErrors(error);
    }
  }

  @Delete('funtienearma/:id')
  async removeFunTieneArma(
    @Param('id', ParseUUIDPipe) id: string
  ) {
    try {
      const funTieneArma = await firstValueFrom(
        this.client.send('delete.ofiuni.funTieneArma', { id }),
      )
      return funTieneArma;

    } catch (error) {
      console.log(error);
      this.handleHttpErrors(error);
    }
  }

  //UNIDAD TIENE ARMA
  @Post('unitienearma')
  async createUnidadTieneArma(@Body() createUniTieneArmaDto: CreateUniTieneArmaDto) {
    try {
      const unidadTieneArma = await firstValueFrom(
        this.client.send('create.ofiuni.uniTieneArma', createUniTieneArmaDto),
      )
      return unidadTieneArma;

    } catch (error) {
      this.handleHttpErrors(error);
    }
  }

  @Get('unitienearma')
  async findAllUnidadTieneArma() {
    try {
      const unidadTieneArma = await firstValueFrom(
        this.client.send('get.ofiuni.uniTieneArma', {}),
      )
      return unidadTieneArma;

    } catch (error) {
      this.handleHttpErrors(error);
    }
  }

  @Get('unitienearma/:id')
  async findOneUnidadTieneArma(
    @Param('id', ParseUUIDPipe) id: string
  ) {
    try {
      const unidadTieneArma = await firstValueFrom(
        this.client.send('get.ofiuni.uniTieneArma.id', { id }),
      )
      return unidadTieneArma;
    } catch (error) {
      this.handleHttpErrors(error);
    }
  }
  @Patch('unitienearma/:id')
  async updateUnidadTieneArma(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateUniTieneArmaDto: UpdateFunTieneArmaDto
  ) {
    try {
      const unidadTieneArma = await firstValueFrom(
        this.client.send('update.ofiuni.uniTieneArma', { id, ...updateUniTieneArmaDto }),
      )
      return unidadTieneArma;

    } catch (error) {
      this.handleHttpErrors(error);
    }
  }
  @Delete('unitienearma/:id')
  async removeUnidadTieneArma(
    @Param('id', ParseUUIDPipe) id: string
  ) {
    try {
      const unidadTieneArma = await firstValueFrom(
        this.client.send('delete.ofiuni.uniTieneArma', { id }),
      )
      return unidadTieneArma;

    } catch (error) {
      this.handleHttpErrors(error);
    }
  }

  // UNIDAD TIENE EQUIPO
  @Post('unitieneequipo')
  async createUnidadTieneEquipo(@Body() createUniTieneEquipoDto: CreateUniTieneEquipoDto) {
    try {
      const unidadTieneEquipo = await firstValueFrom(
        this.client.send('create.ofiuni.uniTieneEquipo', createUniTieneEquipoDto),
      )
      return unidadTieneEquipo;

    } catch (error) {
      this.handleHttpErrors(error);
    }
  }
  @Get('unitieneequipo')
  async findAllUnidadTieneEquipo() {
    try {
      const unidadTieneEquipo = await firstValueFrom(
        this.client.send('get.ofiuni.uniTieneEquipo', {}),
      )
      return unidadTieneEquipo;

    } catch (error) {
      this.handleHttpErrors(error);
    }
  }
  @Get('unitieneequipo/:id')
  async findOneUnidadTieneEquipo(
    @Param('id', ParseUUIDPipe) id: string
  ) {
    try {
      const unidadTieneEquipo = await firstValueFrom(
        this.client.send('get.ofiuni.uniTieneEquipo.id', { id }),
      )
      return unidadTieneEquipo;
    } catch (error) {
      console.log(error);
      this.handleHttpErrors(error);
    }
  }
  @Patch('unitieneequipo/:id')
  async updateUnidadTieneEquipo(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateUniTieneEquipoDto: UpdateFunTieneArmaDto
  ) {
    try {
      const unidadTieneEquipo = await firstValueFrom(
        this.client.send('update.ofiuni.uniTieneEquipo', { id, ...updateUniTieneEquipoDto }),
      )
      return unidadTieneEquipo;

    } catch (error) {
      this.handleHttpErrors(error);
    }
  }
  @Delete('unitieneequipo/:id')
  async removeUnidadTieneEquipo(
    @Param('id', ParseUUIDPipe) id: string
  ) {
    try {
      const unidadTieneEquipo = await firstValueFrom(
        this.client.send('delete.ofiuni.uniTieneEquipo', { id }),
      )
      return unidadTieneEquipo;

    } catch (error) {
      this.handleHttpErrors(error);
    }
  }

  // HANDLING ERRORS
  private handleHttpErrors(error) {
    console.log(error);
    if (error.status === 400) {
      // Lanzar una excepción HTTP adecuada
      throw new BadRequestException(error.message);
    } else if (error.status === 404) {
      // Lanzar una excepción HTTP adecuada
      throw new BadRequestException(error.message);
    }
    else {
      // Si no es un status manejado, lanzamos un error interno
      throw new RpcException('Error desconocido al eliminar la relación unidad-tiene-equipo.');
    }
  }
}
