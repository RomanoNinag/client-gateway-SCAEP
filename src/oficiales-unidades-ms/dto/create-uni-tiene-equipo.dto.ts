import { IsNumber, IsString, IsUUID } from "class-validator";

export class CreateUniTieneEquipoDto {

    @IsNumber()
    id_unidad: number;
    @IsUUID()
    @IsString()
    id_equipo: string;
    @IsString()
    nro_acta_entrega: string;
    @IsString()
    procedencia: string;
    @IsString()
    cod_reg: string;
}
