import { Router } from "express";
import { methodsHTTP as ProductoController } from "../controllers/productos.controllers.js";

const router = Router();


router.put("/:id", ProductoController.updateProducto);

export default router;
