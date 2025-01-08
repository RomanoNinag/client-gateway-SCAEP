import { IsString, IsUUID } from "class-validator";

export class CreateUniTieneEquipoDto {

    @IsUUID()
    @IsString()
    id_unidad: string;
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
