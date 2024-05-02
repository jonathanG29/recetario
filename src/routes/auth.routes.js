import { Router } from "express";
import { login, register } from '../controllers/auth.controller.js'

const router = Router()

//creamos las rutas
router.post('/register', register);

router.post('/login', login);


export default router