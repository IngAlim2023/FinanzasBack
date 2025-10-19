import router from '@adonisjs/core/services/router'
import InversionesController from '#controllers/InversionesController'

const inversiones = new InversionesController()

router.post('/api/inversiones', inversiones.createInversion)
router.get('/api/inversiones/:id', inversiones.readInversionsUsuaurio)
router.get('/api/inversiones/total/:id', inversiones.readInversionsTotal)
