import { PartialType } from '@nestjs/mapped-types';
import { CreateEquipoArmamentoMDto } from './create-equipo-armamento-m.dto';

export class UpdateEquipoArmamentoMDto extends PartialType(CreateEquipoArmamentoMDto) {
  id: number;
}
