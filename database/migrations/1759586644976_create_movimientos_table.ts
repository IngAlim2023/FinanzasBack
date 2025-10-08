import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'movimientos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('idtipomovimiento').notNullable().unsigned().references('id').inTable('tiposmovimientos')
      table.integer('idusuario').notNullable().unsigned().references('id').inTable('usuarios')
      table.integer('idcategoria').notNullable().unsigned().references('id').inTable('categorias')

      table.decimal('monto', 13,1).notNullable()
      table.date('fecha').notNullable()
      table.text('descripcion').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}