import LivroRepository from '../repositories/livro.repository.js';
import LivroInfoRepository from '../repositories/livroInfo.repository.js'

async function createLivro(livro) {
    return await LivroRepository.createLivro(livro);
}

async function getLivro(id) {
    return await LivroRepository.getLivro(id);
}


async function deleteLivro(id) {
    await LivroRepository.deleteLivro(id);
}

async function updateLivro(livro) {
    await LivroRepository.updateLivro(livro);
}


// mongo db ===================================================================

async function createLivroInfo(livroInfo) {
    await LivroInfoRepository.createLivroInfo(livroInfo);
}


async function deleteLivroInfo(id) {
    await LivroInfoRepository.deleteLivroInfo(id);
}



async function createAvaliacao(livroInfo) {
    if (!livroInfo.livroId || !livroInfo.avaliacao) {
        throw new Error("Empty required fields");
    }
    return await createAvaliacao(livroInfo.avaliacao, livroInfo.livroId);
}



export default {
    createLivro,
    getLivro,
    deleteLivro, 
    updateLivro,
    createLivroInfo,
    deleteLivroInfo,
    createAvaliacao

};
