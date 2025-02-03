import { Transform } from "class-transformer";
import { IsDate, IsNumber, IsString, IsUUID } from "class-validator";

export class CreateUniTieneArmaDto {
    @IsUUID()
    id_arma: string;

    @IsNumber()
    id_uni: number;

    @Transform(({ value }) => new Date(value))
    @IsDate()
    fecha_entrega: Date;

    @IsString()
    nro_acta_entrega: string;

    @Transform(({ value }) => new Date(value))
    @IsDate()
    fecha_registro: Date;

    @IsString()
    procedencia: string;

    @IsString()
    entrega_encalidad_de: string;

    @IsString()
    verif_existencia: string;
}
