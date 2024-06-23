import Sequelize from "sequelize";
import db from '../config/db.js'

const Autor = db.define('autores', {
    autorId: {
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
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    }
},
    // underscore true mapeia camelcase pra trabalhar com snakecase que ta no banco de dados
    { underscored: true })


Autor.sync({ force: true });
console.log("A tabela de Autores foi (re)criada!");

export default Autor


