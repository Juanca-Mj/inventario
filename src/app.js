import express from "express";
import cors from "cors";
import categoriaRoute from "./routes/categorias.routes.js";
import empleadoRoute from "./routes/empleados.routes.js";
import clienteRoute from "./routes/clientes.routes.js";
import productoRoute from "./routes/productos.routes.js"; 

const app = express();

app.set("port", 5000);

app.use(express.json());
app.use(cors());
app.get("/", (req, res ) => {
    res.send("API is running...");
})
app.use("/api/categorias", categoriaRoute);
app.use("/api/empleados", empleadoRoute);
app.use("/api/clientes", clienteRoute); 
app.use("/api/productos", productoRoute);

export default app;
