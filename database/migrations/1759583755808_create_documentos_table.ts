import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'documentos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('documento', 100).notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
