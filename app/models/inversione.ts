import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Usuario from './usuario.js'
import { type BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Inversione extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column() declare idusuario: number
  @column() declare descripcion: string
  @column() declare monto: number
  @column() declare fecha: Date

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(()=> Usuario,{foreignKey:'idusuario',})
  declare usuario: BelongsTo<typeof Usuario>

}