import type { HttpContext } from '@adonisjs/core/http'
import InversionesServices from '#services/InversionesServices'

const inver = new InversionesServices()

export default class InversionesController {
  async createInversion({ request, response }: HttpContext) {
    try {
      const { idusuario, descripcion, monto, fecha } = request.body()
      await inver.create({ idusuario, descripcion, monto, fecha })

      return response.status(201).json({ message: 'Creado' })
    } catch (e) {
      return response.status(500).json({ message: 'Error interno', error:e.message })
    }
  }
  async readInversionsUsuaurio({ params, response }: HttpContext) {
    try {
      const { id } = params

      const inveriones = await inver.readByUser(id)

      return response.status(201).json({ message: 'Informacion obtenida', data: inveriones })
    } catch (e) {
      return response.status(500).json({ message: 'Error interno' })
    }
  }
  async readInversionsTotal({ params, response }: HttpContext) {
    try {
      const { id } = params

      const resultado = await inver.readTotal(id)
      const total = resultado[0]?.$extras.sum ?? '0'

      return response.status(201).json({ message: 'Informacion obtenida', data: total })
    } catch (e) {
      return response.status(500).json({ message: 'Error interno' })
    }
  }
}
