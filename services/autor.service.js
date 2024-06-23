import AutorRepository from '../repositories/autor.repository.js';

async function createAutor(autor) {
    return await AutorRepository.createAutor(autor);
}

async function getAutor(id) {
    return await AutorRepository.getAutor(id);
}

async function deleteAutor(id) {
    await AutorRepository.deleteAutor(id);
}

async function updateAutor(autor) {
    await AutorRepository.updateAutor(autor);
}

export default {
    createAutor,
    getAutor,
    deleteAutor,
    updateAutor
};
