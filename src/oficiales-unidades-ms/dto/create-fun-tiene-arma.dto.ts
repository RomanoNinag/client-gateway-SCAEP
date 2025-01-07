import { Transform } from "class-transformer";
import { IsDate, IsString, IsUUID } from "class-validator";

export class CreateFunTieneArmaDto {
    @IsString()
    @IsUUID()
    id_arma: string;

    @IsString()
    @IsUUID()
    id_fun_pol: string;

    @Transform(({ value }) => new Date(value))
    @IsDate()
    fecha_entrega: Date;

    @IsString()
    nro_acta_entrega: string;

    @Transform(({ value }) => new Date(value))
    @IsDate()
    fecha_registro: Date;

    @IsString()
    cod_registro: string;

    @IsString()
    procedencia: string;
}
