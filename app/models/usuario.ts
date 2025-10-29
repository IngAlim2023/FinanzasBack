import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import Documento from './documento.js'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Inversione from './inversione.js'
import Rol from './rol.js'
import Movimiento from './movimiento.js'
import Categoria from './categoria.js'

export default class Usuario extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column() declare iddocumento:number
  @column() declare idrol:number
  @column() declare nombres:string
  @column() declare apellidos:string
  @column() declare documento:string
  @column() declare correo:string
  @column() declare password:string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(()=> Documento,{ foreignKey:'iddocumento',})
  declare document: BelongsTo<typeof Documento>

  @belongsTo(()=> Rol,{ foreignKey:'idrol',})
  declare rol: BelongsTo<typeof Rol>

  @hasMany(()=>Inversione)
  declare inversiones: HasMany<typeof Inversione>
  
  @hasMany(()=>Movimiento)
    declare movimientos: HasMany<typeof Movimiento>

  @hasMany(()=>Categoria)
   declare categoria: HasMany<typeof Categoria>
}