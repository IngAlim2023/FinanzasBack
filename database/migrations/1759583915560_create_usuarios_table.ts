import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'usuarios'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('iddocumento').notNullable().unsigned().references('id').inTable('documentos')

      table.string('nombres', 90).notNullable()
      table.string('apellidos', 90).notNullable()
      table.string('documento', 100).notNullable()
      table.string('rol', 50).notNullable().defaultTo('usuario')
      table.string('correo', 200).notNullable()
      table.string('password', 200).notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}