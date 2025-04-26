import { Router } from "express";
import { methodHTTP as ClienteController } from "../controllers/clientes.controllers.js";

const router = Router();


router.post("/", ClienteController.createCliente);

export default router;
