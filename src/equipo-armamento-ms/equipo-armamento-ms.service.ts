import { Injectable } from '@nestjs/common';
import { CreateEquipoArmamentoMDto } from './dto/create-equipo-armamento-m.dto';
import { UpdateEquipoArmamentoMDto } from './dto/update-equipo-armamento-m.dto';

@Injectable()
export class EquipoArmamentoMsService {
  create(createEquipoArmamentoMDto: CreateEquipoArmamentoMDto) {
    return 'This action adds a new equipoArmamentoM';
  }

  findAll() {
    return `This action returns all equipoArmamentoMs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} equipoArmamentoM`;
  }

  update(id: number, updateEquipoArmamentoMDto: UpdateEquipoArmamentoMDto) {
    return `This action updates a #${id} equipoArmamentoM`;
  }

  remove(id: number) {
    return `This action removes a #${id} equipoArmamentoM`;
  }
}
