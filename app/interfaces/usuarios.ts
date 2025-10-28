import { DateTime } from "luxon";

export interface UsuariosData{
    id?:number,
    iddocumento:number,
    idrol?:number,
    nombres:string,
    apellidos:string,
    documento:string,
    correo:string,
    password:string,
    created_at?:DateTime<boolean>,
    updated_at?:DateTime<boolean>,
}