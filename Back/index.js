import express from "express";
import cors from "cors";
import baseDeDatos from "./database/conexionBaseDeDatos.js";
import clientesRouter from "./routes/clientesroute.js";

const app = express();

try {
    await baseDeDatos.authenticate()
    console.log('Conexion Exitosa A La Base De Datos')
    
}catch (error) {
    console.log('Conexion No Exitosa')
}

app.use(express.json())
app.use(cors())
app.use('/clientes', clientesRouter)

app.listen(3100, () =>{
    console.log('Servidor Corriendo en el puerto 3100')
    console.log('http://localhost:3100')
});