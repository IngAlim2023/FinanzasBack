import Usuario from "#models/usuario";
import { UsuariosData } from "../interfaces/usuarios.js";

export default class UsuariosServices{
    async create(data:UsuariosData){
        return await Usuario.create(data);
    }
    async readUsuarioByCorreo(correo:string){
        return Usuario.query().where('correo', correo).first();
    }
    async readUsuarioByDocumento(documento:string){
        return Usuario.query().where('documento', documento).first();
    }
}