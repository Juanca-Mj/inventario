import { Router } from "express";
import { createCliente } from "../controllers/clientes.controllers.js";

const router = Router();

router.post("/", createCliente);
export default router;