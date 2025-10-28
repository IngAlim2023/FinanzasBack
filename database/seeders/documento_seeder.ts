import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from '@adonisjs/lucid/services/db'

export default class extends BaseSeeder {
  async run() {
    const documentosExist = await db.from('documentos').count('* as total')
    if (documentosExist[0].total > 0) return

    await db.table('documentos').insert([
      {
        id: 1,
        documento: 'Cédula de Ciudadanía',
      },
      {
        id: 2,
        documento: 'Tarjeta de Identidad',
      },
      {
        id: 3,
        documento: 'Registro Civil de Nacimiento',
      },
      {
        id: 4,
        documento: 'Cédula de Extranjería',
      },
      { id: 5, documento: 'Pasaporte' },
      {
        id: 6,
        documento: 'Número de Identificación Tributaria',
      },
      {
        id: 7,
        documento: 'Permiso Especial de Permanencia',
      },
    ])
    console.log('Documentos creados')
  }
}
