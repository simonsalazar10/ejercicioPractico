import Cliente from "../models/clientemodels.js";
import { Sequelize } from "sequelize";


const mostrarCliente = async (req, res) => {
    try{
        const clientes = await Cliente.findOne({where: {id: req.params.id}})
        res.json(clientes)
    }catch (error) {
        res.json({
          message: "Cliente No Existe: "+ error
      });
    
      }
};

const mostrarClientes = async (req, res) =>{
    try {
        const clientes = await Cliente.findAll();
        res.json(clientes);
      } catch (error) {
        res.json({
          message: "Base De Datos Vacia"
        });
        
      }
  
};

const crearCliente = async (req, res) => {
    try {

        await Cliente.create(req.body)
        res.json({
            message:'Cliente Creado Correctamente'
        });
        
    } catch (error) {
        res.json({
            message:'No se pudo registrar el Cliente'+ error
        })
        
    }

};

export {
    mostrarCliente,
    mostrarClientes,
    crearCliente
}