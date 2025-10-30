import MovimientosController from "#controllers/MovimientosController";
import router from "@adonisjs/core/services/router";

const movimientos = new MovimientosController()


router.post('/api/movimientos', movimientos.createMovimiento);
router.get('/api/movimientos/user/:id', movimientos.readMoviminetosUsuario);
router.get('/api/movimientos/user/incomes/:id', movimientos.readIncomeTotalByUser);
router.get('/api/movimientos/user/expenses/:id', movimientos.readExpensesTotalByUser);