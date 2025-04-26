import getConnection from "../db/database.js";

const getEmpleados = async (req, res) => {
    try {
        const connection = await getConnection();
        const empleados = await connection.query(
            "SELECT EmpleadoID, Apellido, Nombre, Titulo, TituloCortesia, FechaNacimiento, FechaContratacion, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Extension, Foto, Notas, Jefe, RutaFoto FROM empleados"
        );
        res.json(empleados);  
    } catch (error) {
        console.error(error);
        res.status(500).send("Error en el servidor");
    }
};

export const methodHTTP = {
    getEmpleados,
};
