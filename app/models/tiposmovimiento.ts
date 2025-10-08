import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Tiposmovimiento extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column() declare documento: string

  @column() declare tipo:string
  
}