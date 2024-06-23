import Sequelize from "sequelize";
import db from '../config/db.js'

const Cliente = db.define('clientes', {
    clientId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false
    }
},
    // underscore true mapeia camelcase pra trabalhar com snakecase que ta no banco de dados
    { underscored: true })



Cliente.sync({ force: true });
console.log("A tabela de Clientes foi (re)criada!");

export default Cliente


