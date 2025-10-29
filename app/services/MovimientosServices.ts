import Movimiento from "#models/movimiento";
import { DataMovimiento } from "../interfaces/movimiento.js";

export default class MovimientosServices{
    async create(data:DataMovimiento){
        return await Movimiento.create(data)
    }
}