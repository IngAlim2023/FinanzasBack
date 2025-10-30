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
  async readMoviminetosUsuario({ params, response }: HttpContext) {
    try {
      const {id} = params;
      const movimientos = await movi.readMovimientosUser(id);
      
      return response.status(200).json({ message: 'Exito', data:movimientos })
    } catch (e) {
      return response.status(500).json({ message: 'Error interno.', error:e.message })
    }
  }
  async readIncomeTotalByUser({ params, response }: HttpContext) {
    try {
      const { id } = params

      const total = await movi.readIncomeTotaluser(id)

      return response.status(201).json({ message: 'Exito', data: total })
    } catch (e) {
      return response.status(500).json({ message: 'Error interno', error: e.message })
    }
  }
  async readExpensesTotalByUser({ params, response }: HttpContext) {
    try {
      const { id } = params

      const total = await movi.readExpensesTotaluser(id)

      return response.status(201).json({ message: 'Exito', data: total })
    } catch (e) {
      return response.status(500).json({ message: 'Error interno', error: e.message })
    }
  }
}
