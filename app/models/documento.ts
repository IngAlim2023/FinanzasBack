import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Usuario from './usuario.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Documento extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column() declare documento: string

  @hasMany(()=> Usuario)
    declare usuarios: HasMany<typeof Usuario>
}
