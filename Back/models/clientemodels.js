import { DataTypes } from "sequelize";
import baseDeDatos from "../database/conexionBaseDeDatos.js";

const Cliente = baseDeDatos.define('clientes', {
    tipoIdentificacion: {
        type:DataTypes.STRING
    },
    numeroIdentificacion: {
        type:DataTypes.STRING
    },
    nombre: {
        type:DataTypes.STRING
    },
    apellido: {
        type:DataTypes.STRING
    },
    fechaNacimiento: {
        type:DataTypes.DATE
    },
    direccion: {
        type:DataTypes.STRING
    },
    ciudad: {
        type:DataTypes.STRING
    },
    departamento: {
        type:DataTypes.STRING
    },
    pais: {
        type:DataTypes.STRING
    },
    marca: {
        type:DataTypes.STRING
    }
})

export default Cliente;