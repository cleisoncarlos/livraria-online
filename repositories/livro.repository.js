import Livro from "../models/livro.model.js";
import Autor from "../models/autor.model.js";

async function createLivro(livro) {
    try {
        Livro.create(livro);
    } catch (err) {
        throw err;
    }
}



async function getLivro(id) {
    try {
        return await Livro.findByPk(id, {
            include: {
                model: Autor,
                attributes: ['nome']
            }
        });
    } catch (err) {
        throw err;
    }
}

// async function updateLivro(livro) {
//   try {
//     await Livro.update(livro, {
//       where: {
//         livroId: livro.livroId,
//       }
//     })

//   }
// }

async function deleteLivro(id) {
    try {
        await Livro.destroy({
            where: { clientId: id },
        });
    } catch (err) {
        throw err;
    }
}


export default {
    createLivro,
    getLivro,
    // updateLivro,
    deleteLivro,
};
