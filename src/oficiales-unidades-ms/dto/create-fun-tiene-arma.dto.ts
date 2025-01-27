import { Transform, Type } from "class-transformer";
import { IsBoolean, IsDate, IsNumber, IsOptional, IsString, IsUUID } from "class-validator";

export class CreateFunTieneArmaDto {
    @IsNumber()
    id_fun_pol: number;

    @IsString()
    @IsUUID()
    id_arma: string;

    // @Transform(({ value }) => new Date(value))
    @IsDate()
    @Type(() => Date)
    fecha_entrega: Date;

    @IsString()
    nro_acta_entrega: string;

    // @Transform(({ value }) => new Date(value))
    @Type(() => Date)
    @IsDate()
    fecha_registro: Date;

    @IsString()
    cod_registro: string;

    @IsString()
    procedencia: string;

    @IsBoolean()
    recurso_propio: boolean;
    @IsString()
    @IsOptional()
    observaciones: string;
}
