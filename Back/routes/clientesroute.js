import express from "express"
import { mostrarCliente, mostrarClientes, crearCliente } from "../controllers/clienteController.js"

const clientesRouter = express.Router()
clientesRouter.post('/', crearCliente)
clientesRouter.get('/', mostrarClientes)
clientesRouter.get('/:id', mostrarCliente)

export default clientesRouter;