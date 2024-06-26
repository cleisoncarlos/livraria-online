import LivroRepository from '../repositories/livro.repository.js';

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

export default {
    createLivro,
    getLivro,
    deleteLivro,
    updateLivro
};
