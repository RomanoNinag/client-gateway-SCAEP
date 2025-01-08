import { PartialType } from '@nestjs/mapped-types';
import { CreateUniTieneEquipoDto } from './create-uni-tiene-equipo.dto';
import { IsString, IsUUID } from 'class-validator';

export class UpdateUniTieneEquipoDto extends PartialType(CreateUniTieneEquipoDto) {

}
