import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from '@adonisjs/lucid/services/db'

export default class extends BaseSeeder {
  async run() {
    const movimientoExist = await db.from('tiposmovimientos').count('* as total')

    if(movimientoExist[0].total > 0) return

    await db.table('tiposmovimientos').insert([
      {id:1, tipo:'Ingreso'},
      {id:2, tipo:'Egreso'},
    ])
    console.log('Movimientos creados')
  }
}