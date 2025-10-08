import type { HttpContext } from "@adonisjs/core/http";
import TipoMovimientoServices from "#services/TipoMovimientoServices";

const tMov = new TipoMovimientoServices();

export default class TipoMovimientoController{
    async readTiposMovimientos({response}:HttpContext){
        try{
            const movimientos = await tMov.read()

            return response.status(200).json({message:'Exito', data:movimientos})

        }catch(e){
            return response.status(500).json({message:'Error Interno', error:e.message})
        }
    }
}