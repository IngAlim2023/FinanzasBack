import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from '@adonisjs/lucid/services/db'

export default class extends BaseSeeder {
  async run() {
    const rolesExist = await db.from('rols').count('* as total')
    if(rolesExist[0].total>0) return

    await db.table('rols').insert([
      {id:1, rol:'Administrador'},
      {id:2, rol:'Usuario'},   
    ])
    console.log('Roles creados')
  }
}