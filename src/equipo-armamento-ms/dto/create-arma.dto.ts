import { IsInt, IsNumber, IsOptional, IsString, MinLength } from "class-validator";
import { CreateArticuloGeneralDto } from "./create-articulo-general.dto";

export class CreateArmaDto extends CreateArticuloGeneralDto {

    @IsString()
    serie: string;

    @IsOptional()
    @IsString()
    calibre?: string;

    @IsOptional()
    @IsInt()
    nro_cargador: number;

    @IsInt()
    capacidad_cargador: number;

    @IsInt()
    capacidad_tambor: number;

    @IsOptional()
    @IsString()
    acabado?: string;
}
