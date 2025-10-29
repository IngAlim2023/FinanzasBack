import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Tiposmovimiento from './tiposmovimiento.js'
import Usuario from './usuario.js'
import Categoria from './categoria.js'

export default class Movimiento extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column() declare idtipomovimiento: number
  @column() declare idusuario: number
  @column() declare idcategoria: number
  @column() declare monto: number
  @column() declare fecha: Date
  @column() declare descripcion: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Tiposmovimiento, { foreignKey: 'idtipomovimiento' })
  declare tipomovimiento: BelongsTo<typeof Tiposmovimiento>

  @belongsTo(() => Usuario, { foreignKey: 'idusuario' })
  declare usuario: BelongsTo<typeof Usuario>

  @belongsTo(() => Categoria, { foreignKey: 'idcategoria' })
  declare movimientos: BelongsTo<typeof Categoria>
}
