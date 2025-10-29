import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import Movimiento from './movimiento.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Categoria from './categoria.js'

export default class Tiposmovimiento extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column() declare documento: string

  @column() declare tipo: string

  @hasMany(() => Movimiento)
  declare movimientos: HasMany<typeof Movimiento>

  @hasMany(() => Categoria)
  declare categoria: HasMany<typeof Categoria>
}
