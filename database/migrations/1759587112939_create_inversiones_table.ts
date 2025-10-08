import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'inversiones'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('idusuario').notNullable().unsigned().references('id').inTable('usuarios')

      table.text('descripcion').notNullable()
      table.decimal('monto',13,1).notNullable()
      table.date('fecha').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}