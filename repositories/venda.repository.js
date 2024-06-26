import Venda from "../models/venda.model.js";
import Livro from "../models/livro.model.js";
import Cliente from "../models/cliente.model.js";


async function createVenda(venda) {
    try {
        Venda.create(venda);
    } catch (err) {
        throw err;
    }
}


async function getVenda(id) {
    try {
        return await Venda.findByPk(id, {
            include: [
                { model: Livro, as: 'livro' },
                { model: Cliente, as: 'cliente' }
            ]
        }


        );
    } catch (err) {
        throw err;
    }
}

// async function updateVenda(venda) {
//   try {
//     await Venda.update(venda, {
//       where: {
//         vendaId: venda.vendaId,
//       }
//     })

//   }
// }

async function deleteVenda(id) {
    try {
        await Venda.destroy({
            where: { clientId: id },
        });
    } catch (err) {
        throw err;
    }
}


export default {
    createVenda,
    getVenda,
    // updateVenda,
    deleteVenda,
};
