import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Movimiento from './movimiento.js'
import Usuario from './usuario.js'
import Tiposmovimiento from './tiposmovimiento.js'

export default class Categoria extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column() declare idusuario: number
  @column() declare idtipomovimiento: number
  @column() declare nombre: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Movimiento)
  declare movimientos: HasMany<typeof Movimiento>

  @belongsTo(() => Usuario, { foreignKey: 'idusuario' })
  declare usuario: BelongsTo<typeof Usuario>
  
  @belongsTo(() => Tiposmovimiento, { foreignKey: 'idtipomovimiento' })
  declare tipomovimiento: BelongsTo<typeof Tiposmovimiento>
}
