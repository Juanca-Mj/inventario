import getConnection from "../db/database.js";

const updateProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const { ProductoNombre, PrecioUnitario } = req.body;

        if (!ProductoNombre || PrecioUnitario == null) {
            res.status(400).json({ message: "Bad Request: Faltan datos" });
            return;
        }

        const connection = await getConnection();
        const result = await connection.query(
            "UPDATE productos SET ProductoNombre = ?, PrecioUnitario = ? WHERE ProductoID = ?",
            [ProductoNombre, PrecioUnitario, id]
        );

        res.json({ message: "Producto actualizado correctamente", result });
    } catch (error) {
        console.error("Error al actualizar producto:", error);
        res.status(500).json({ message: "Error en el servidor" });
    }
};

export const methodsHTTP = {
    updateProducto
};
