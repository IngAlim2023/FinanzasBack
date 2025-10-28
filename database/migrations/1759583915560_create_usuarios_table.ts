import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'usuarios'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('iddocumento').notNullable().unsigned().references('id').inTable('documentos')
      table.integer('idrol').notNullable().defaultTo(2).unsigned().references('id').inTable('rols')

      table.string('nombres', 90).notNullable()
      table.string('apellidos', 90).notNullable()
      table.string('documento', 100).notNullable().unique()
      table.string('correo', 200).notNullable().unique()
      table.string('password', 200).notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}