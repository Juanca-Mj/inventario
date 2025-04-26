import { Router } from "express";
import { methodHTTP as EmpleadoController } from "../controllers/empleados.controllers.js";

const router = Router();

router.get("/", EmpleadoController.getEmpleados);

export default router;  