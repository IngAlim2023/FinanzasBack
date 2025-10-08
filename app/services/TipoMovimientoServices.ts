import Tiposmovimiento from "#models/tiposmovimiento";

export default class TipoMovimientoServices{
    async read(){
        return await Tiposmovimiento.all()
    }
}