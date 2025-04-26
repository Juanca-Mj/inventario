import express from "express";
import cors from "cors";
import dotenv from "dotenv"; 
import categoriaRoute from "./routes/categorias.routes.js";
import empleadoRoute from "./routes/empleados.routes.js"; 

dotenv.config(); 

const app = express();

app.set("port", process.env.PORT || 5000);

app.use(cors()); 
app.use(express.json()); 

// Rutas
app.use("/api/categorias", categoriaRoute);
app.use("/api/empleados", empleadoRoute); 

export default app;
