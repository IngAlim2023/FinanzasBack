import CategoriaServices from '#services/CategoriasServices'
import { HttpContext } from '@adonisjs/core/http'

const cat = new CategoriaServices()

export default class CategoriaController {
  async createCategoria({ request, response }: HttpContext) {
    try {
      const { idusuario, idtipomovimiento, nombre } = request.body()

      await cat.create({ idusuario, idtipomovimiento, nombre })

      return response.status(201).json({ message: 'Creado' })
    } catch (e) {
      return response.status(500).json({ message: 'Error interno', error: e.message })
    }
  }
  async readCatByUserAndMov({ params, response }: HttpContext) {
    try {
      const { idUsu, idMov } = params

      const categorias = await cat.readByUser(idUsu, idMov)

      return response.status(201).json({ message: 'Exito', data: categorias })
    } catch (e) {
      return response.status(500).json({ message: 'Error interno', error: e.message })
    }
  }
}
