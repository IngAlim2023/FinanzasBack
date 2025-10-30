import Movimiento from '#models/movimiento'
import { DataMovimiento } from '../interfaces/movimiento.js'

export default class MovimientosServices {
  async create(data: DataMovimiento) {
    return await Movimiento.create(data)
  }
  async readMovimientosUser(id:number){
    return await Movimiento.query().where('idusuario', id).preload('movimientos').preload('tipomovimiento').orderBy('created_at', 'desc')
  }
  async readIncomeTotaluser(id: number) {
    const result = await Movimiento.query()
      .where('idusuario', id)
      .where('idtipomovimiento', 1)
      .sum('monto as total')

    return result[0]?.$extras?.total || 0
  }
  async readExpensesTotaluser(id: number) {
    const result = await Movimiento.query()
      .where('idusuario', id)
      .where('idtipomovimiento', 2)
      .sum('monto as total')

    return result[0]?.$extras?.total || 0
  }
}
