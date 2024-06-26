import Sequelize from "sequelize";
import db from '../config/db.js'
import Autor from "./autor.model.js";

const Livro = db.define('livros', {
    livroId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    valor: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    estoque: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
},
    // underscore true mapeia camelcase pra trabalhar com snakecase que ta no banco de dados
    { underscored: true })

Livro.belongsTo(Autor, { foreignKey: 'autor_id' });

//Livro.sync({ force: true });
//console.log("A tabela de Livros foi (re)criada!");


export default Livro


