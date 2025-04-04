import express from "express";
import categoriaRoute from "./routes/categorias.routes.js"
const app = express();

app.set("port",5000)

app.use("/api/categorias", categoriaRoute);

export default app;