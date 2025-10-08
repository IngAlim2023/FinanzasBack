import router from "@adonisjs/core/services/router";
import DocumentosController from "#controllers/DocumentosController";


const doc = new DocumentosController();


router.get('/api/documentos', doc.readDocumentos);