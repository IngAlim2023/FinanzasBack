import Documento from '#models/documento'

export default class DocumentosServices {
  async read() {
    return await Documento.query().select('*').orderBy('id','asc')
  }
}
