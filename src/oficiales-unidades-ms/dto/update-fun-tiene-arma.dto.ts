import { PartialType } from '@nestjs/mapped-types';
import { CreateFunTieneArmaDto } from './create-fun-tiene-arma.dto';

export class UpdateFunTieneArmaDto extends PartialType(CreateFunTieneArmaDto) {
}
