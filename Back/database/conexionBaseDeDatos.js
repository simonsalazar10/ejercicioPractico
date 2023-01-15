import {Sequelize} from "sequelize";

const baseDeDatos = new Sequelize ('clienteuribe', 'root', '', {
    host:'localhost',
    dialect:'mysql'
})

export default baseDeDatos;