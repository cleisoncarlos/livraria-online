import Sequelize from "sequelize";
import db from '../config/db.js'

import Cliente from "./cliente.model.js";
import Livro from "./livro.model.js";

const Venda = db.define('cendas', {
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
Venda.belongsTo(Cliente, { foreignKey: 'clienteId' })
Venda.belongsTo(Livro, { foreignKey: 'livroId' })

export default Venda


