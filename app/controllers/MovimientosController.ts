import MovimientosServices from '#services/MovimientosServices'
import type { HttpContext } from '@adonisjs/core/http'

const movi = new MovimientosServices()

export default class MovimientosController {
  async createMovimiento({ request, response }: HttpContext) {
    try {
      const { idtipomovimiento, idusuario, idcategoria, monto, fecha, descripcion } = request.body()

      await movi.create({ idtipomovimiento, idusuario, idcategoria, monto, fecha, descripcion })

      return response.status(201).json({ message: 'Creado' })
    } catch (e) {
      return response.status(500).json({ message: 'Error interno', error: e.message })
    }
  }
}
