import { DateTime } from "luxon";

export interface InversionesData{
    id?: number;
    createdAt?: DateTime<boolean>;
    updatedAt?: DateTime<boolean>;
    idusuario: number;
    descripcion: string;
    monto: number;
    fecha: Date;
}