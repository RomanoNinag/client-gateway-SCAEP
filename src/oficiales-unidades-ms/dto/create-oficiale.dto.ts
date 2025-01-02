import { Transform } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateOficialeDto {

    @IsString()
    @IsNotEmpty()
    ci: string;

    @IsString()
    @IsNotEmpty()
    nombres: string;

    @IsString()
    @IsNotEmpty()
    ap_paterno: string;

    @IsString()
    @IsOptional() // Asumiendo que ap_materno puede ser opcional
    ap_materno: string;

    @IsString()
    @IsOptional() // Asumiendo que genero puede ser opcional
    genero: string;

    @Transform(({ value }) => new Date(value))
    @IsDate()
    fecha_nacimiento: Date;

    @IsString()
    nro_escalafon: string;

    @IsNumber()
    @IsOptional() // Asumiendo que promocion puede ser opcional
    promocion: number;

    @Transform(({ value }) => new Date(value))
    @IsDate()
    fecha_ingreso_institucion: Date;

    @IsString()
    @IsNotEmpty()
    grado: string;
}
