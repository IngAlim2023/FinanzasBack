import MovimientosController from "#controllers/MovimientosController";
import router from "@adonisjs/core/services/router";

const movimientos = new MovimientosController()


router.post('/api/movimientos', movimientos.createMovimiento);