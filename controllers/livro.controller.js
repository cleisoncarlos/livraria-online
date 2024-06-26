
import LivroService from '../services/livro.service.js'

async function createLivro(req, res, next) {
    try {
        let livro = req.body;
        if (
            !livro.nome ||
            !livro.valor ||
            !livro.estoque ||
            !livro.autor_id

        ) {
            throw new Error("Todas as informações são obrigatórias !");
        }
        livro = await LivroService.createLivro(livro);
        res.send(livro);
        logger.info(`POST / livro - ${JSON.stringify(livro)}`);

    } catch (err) {
        next(err);
    }
}


//========================

async function getLivro(req, res, next) {
    try {
        res.send(await LivroService.getLivro(req.params.id));
        logger.info("GET /livro");
    } catch (err) {
        next(err);
    }
}

//======================

async function deleteLivro(req, res, next) {
    try {
        await LivroService.deleteLivro(req.params.id);
        res.end();
        logger.info("DELETE /client");
    } catch (err) {
        next(err);
    }
}

//=============================

async function updateLivro(req, res, next) {
    try {
        let livro = req.body;
        if (
            !livro.livroId ||
            !livro.name ||
            !livro.email ||
            !livro.senha ||
            !livro.telefone ||
            !livro.endereco
        ) {
            throw new Error("Todas as informações são obrigatórias !");
        }
        livro = await LivroService.updateLivro(livro);
        res.send(livro);
        logger.info(`PUT / client - ${JSON.stringify(livro)}`);
        logger.info("PUT /client");
    } catch (err) {
        next(err);
    }
}

export default {
    createLivro,
    getLivro,
    deleteLivro,
    updateLivro,
};
