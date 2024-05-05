import { Router  } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getRecipies, getRecipie, createRecipies, updateRecipie, deleteRecipie, getFavRecipies } from "../controllers/recipies.controller.js";

const router = Router()

//obtiene todas las recetas
router.get('/recepies', authRequired, getRecipies);

//obtiene una receta
router.get('/recepies/:id', authRequired, getRecipie );

//crea una receta
router.post('/recepies', authRequired, createRecipies );

//elimina una receta
router.delete('/recepies/:id', authRequired, deleteRecipie );

//actualiza una receta
router.put('/recepies/:id', authRequired, updateRecipie);

//trae recetas favoritas de un usuario logeado
router.get('/recipesfavoritas', authRequired, getFavRecipies);

export default router