import type { HttpContext } from '@adonisjs/core/http'
import DocumentosServices from '#services/DocumentosServices'

const doc = new DocumentosServices()

export default class DocumentosController {
  async readDocumentos({ response }: HttpContext) {
    try {
      const documentos = await doc.read()
      return response.status(200).json({ message: 'Exito', data: documentos })
    } catch (e) {
      return response.status(500).json({ message: 'Error interno', error: e.message })
    }
  }
}
