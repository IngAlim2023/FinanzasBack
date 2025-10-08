import router from "@adonisjs/core/services/router";
import TipoMovimientoController from "#controllers/TipoMovimientoController";

const tM = new TipoMovimientoController();

router.get('/api/tiposMovimientos', tM.readTiposMovimientos);

