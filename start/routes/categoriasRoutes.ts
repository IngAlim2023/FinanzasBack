import router from "@adonisjs/core/services/router";
import CategoriaController from "#controllers/CategoriasController";
import ValidateToken from "#middleware/ValidateToken";


const categoria = new CategoriaController();
const md = new ValidateToken()

router.post('/api/categorias', (ctx)=>md.validate(ctx, ()=>categoria.createCategoria(ctx)));
router.get('/api/categorias/:idUsu/:idMov', categoria.readCatByUserAndMov);