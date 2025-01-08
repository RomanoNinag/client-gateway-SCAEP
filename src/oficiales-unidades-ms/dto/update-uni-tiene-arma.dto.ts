import { PartialType } from '@nestjs/mapped-types';
import { CreateUniTieneArmaDto } from './create-uni-tiene-arma.dto';

export class UpdateUniTieneArmaDto extends PartialType(CreateUniTieneArmaDto) {
}
