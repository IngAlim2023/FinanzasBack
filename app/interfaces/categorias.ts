import { DateTime } from "luxon"

export interface CategoriaData {
  id?: number
  idusuario: number
  idtipomovimiento: number
  nombre: string
  created_at?: DateTime<boolean>
  updated_at?: DateTime<boolean>
}
