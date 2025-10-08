import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'categorias'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('idusuario').notNullable().unsigned().references('id').inTable('usuarios')
      table.integer('idtipomovimiento').notNullable().unsigned().references('id').inTable('tiposmovimientos')

      table.string('nombre', 100).notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}