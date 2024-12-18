import { IsNumber, IsPositive, IsString } from "class-validator";

export class CreateUnidadDto {

    @IsString()
    nombre_unidad: string;

    @IsString()
    provincia: string;

    @IsString()
    municipio: string;

    @IsString()
    responsable: string;

    @IsNumber()
    @IsPositive()
    id_departamento: number;
}
