

import AutorService from '../services/autor.service.js';

async function createAutor(req, res, next) {
    try {
        let autor = req.body;
        if (
            !autor.nome ||
            !autor.email ||
            !autor.telefone

        ) {
            throw new Error("Todas as informações são obrigatórias !");
        }
        autor = await AutorService.createAutor(autor);
        res.send(autor);
        logger.info(`POST / autor - ${JSON.stringify(autor)}`);

    } catch (err) {
        next(err);
    }
}


//========================

async function getAutor(req, res, next) {
    try {
        res.send(await AutorService.getAutor(req.params.id));
        logger.info("GET /client");
    } catch (err) {
        next(err);
    }
}

//======================

async function deleteAutor(req, res, next) {
    try {
        await AutorService.deleteAutor(req.params.id);
        res.end();
        logger.info("DELETE /autor");
    } catch (err) {
        next(err);
    }
}

//=============================

async function updateAutor(req, res, next) {
    try {
        let autor = req.body;
        if (
            !autor.autorId ||
            !autor.name ||
            !autor.email ||
            !autor.senha ||
            !autor.telefone ||
            !autor.endereco
        ) {
            throw new Error("Todas as informações são obrigatórias !");
        }
        autor = await AutorService.updateAutor(autor);
        res.send(autor);
        logger.info(`PUT / client - ${JSON.stringify(autor)}`);
        logger.info("PUT /client");
    } catch (err) {
        next(err);
    }
}

export default {
    createAutor,
    getAutor,
    deleteAutor,
    updateAutor,
};
