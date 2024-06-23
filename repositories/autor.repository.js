import Autor from "../models/autor.model.js";

async function createAutor(autor) {
    try {
        Autor.create(autor);
    } catch (err) {
        throw err;
    }
}


async function getAutor(id) {
    try {
        return await Autor.findByPk(id);
    } catch (err) {
        throw err;
    }
}

// async function updateCliente(autir) {
//   try {
//     await Autor.update(autor, {
//       where: {
//         clienteId: autor.clienteId,
//       }
//     })

//   }
// }

async function deleteAutor(id) {
    try {
        await Autor.destroy({
            where: { clientId: id },
        });
    } catch (err) {
        throw err;
    }
}


export default {
    createAutor,
    getAutor,
    // updateCliente,
    deleteAutor,
};
