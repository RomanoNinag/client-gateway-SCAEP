import { IsEnum, IsNumber, IsPositive, IsString } from "class-validator";
import { Departamento } from "../enums/departamento.enum";

export class CreateUnidadDto {

    @IsString()
    nombre_unidad: string;

    @IsString()
    provincia: string;

    @IsString()
    municipio: string;

    @IsString()
    responsable: string;

    @IsEnum(Departamento, {
        message: `El departamento debe ser uno de los siguientes valores: ${Object.values(Departamento).join(',')}`
    })
    departamento: String;
}
