import router from "@adonisjs/core/services/router";
import UsuariosController from "#controllers/UsuariosController";


const usuarios = new UsuariosController();


router.post('/api/usuarios', usuarios.createUsuario);
router.post('/api/usuarios/login', usuarios.login);
router.get('/api/usuarios/logout', usuarios.logout);
router.get('/api/usuarios/verifySesion', usuarios.verifySesion);
router.get('/api/usuarios/verifyCorreo/:correo', usuarios.verifyCorreo);
router.get('/api/usuarios/verifyDocumento/:documento', usuarios.verifyDocumento);