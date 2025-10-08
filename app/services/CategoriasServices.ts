import Categoria from '#models/categoria'
import { CategoriaData } from '../interfaces/categorias.js'

export default class CategoriaServices {
  async create(data: CategoriaData) {
    return await Categoria.create(data)
  }
  async readByUser(idUsu: any, idMov:any) {
    return await Categoria.query().where('idusuario', idUsu).where('idtipomovimiento', idMov)
  }
}
