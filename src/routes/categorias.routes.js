import { Router } from "express";
import { methodHTTP as categoriaController } from "../controllers/categorias.controllers.js";
const router = Router();

router.get("/", categoriaController.getCategorias);
router.post("/", categoriaController.postCategorias);
/* rueta que recibe parametro*/
router.get("/:id", categoriaController.getCategory);

router.delete("/:id", categoriaController.deleteCategory);
router.put("/:id", categoriaController.updateCategorias);
export default router;
