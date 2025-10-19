import Inversione from "#models/inversione";
import { InversionesData } from "../interfaces/inversiones.js";

export default class InversionesServices{
    async create(data:InversionesData){
        return await Inversione.create(data)
    }
    async readByUser(id:any){
        return await Inversione.query().where('idusuario', id).orderBy('fecha', "desc")
    }
    async readTotal(id:any){
        return await Inversione.query().where('idusuario', id).sum('monto')
    }
}