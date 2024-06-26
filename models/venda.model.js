import Sequelize from "sequelize";
import db from '../config/db.js'

import Cliente from "./cliente.model.js";
import Livro from "./livro.model.js";

const Venda = db.define('vendas', {
    vendaId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    valor: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    data: {
        type: Sequelize.DATE,
        allowNull: false
    }

},
    // underscore true mapeia camelcase pra trabalhar com snakecase que ta no banco de dados
    { underscored: true })



// relacionamento de tabelas
Venda.belongsTo(Cliente, { foreignKey: 'cliente_id' })
Venda.belongsTo(Livro, { foreignKey: 'livro_id' })

//Venda.sync({ force: true });
//console.log("A tabela de Vendas foi (re)criada!");


export default Venda


