import { DateTime } from "luxon";

export interface UsuariosData{
    id?:number,
    iddocumento:number,
    nombres:string,
    apellidos:string,
    documento:string,
    rol?:string,
    correo:string,
    password:string,
    created_at?:DateTime<boolean>,
    updated_at?:DateTime<boolean>,
}