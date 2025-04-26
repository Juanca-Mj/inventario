import getConnection from "../db/database.js";


const createCliente = async (req, res) => {
    const { ClienteID, Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax } = req.body;
    
    if (!ClienteID || !Compania || !Telefono) {
        return res.status(400).json({ message: "ClienteID, Compania y Telefono son requeridos." });
    }

    try {
        const connection = await getConnection();

     
        const query = `
            INSERT INTO clientes 
            (ClienteID, Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        const values = [ClienteID, Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax];
        
        
        await connection.query(query, values);
        
    
        res.status(201).json({ message: "Cliente creado exitosamente." });
    } catch (error) {
        console.error("Error al crear cliente: ", error);
        res.status(500).json({ message: "Error en el servidor al crear cliente." });
    }
};

export const methodHTTP = {
    createCliente,
};
