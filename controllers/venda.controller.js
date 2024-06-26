
import VendaService from '../services/venda.service.js'

async function createVenda(req, res, next) {
    try {
        let venda = req.body;
        if (
            !venda.valor ||
            !venda.data ||
            !venda.cliente_id ||
            !venda.livro_id
        ) {
            throw new Error("Todas as informações são obrigatórias !");
        }
        venda = await VendaService.createVenda(venda);
        res.send(venda);
        logger.info(`POST / venda - ${JSON.stringify(venda)}`);

    } catch (err) {
        next(err);
    }
}


//========================

async function getVenda(req, res, next) {
    try {
        res.send(await VendaService.getVenda(req.params.id));
        logger.info("GET /venda");
    } catch (err) {
        next(err);
    }
}

//======================

async function deleteVenda(req, res, next) {
    try {
        await VendaService.deleteVenda(req.params.id);
        res.end();
        logger.info("DELETE /client");
    } catch (err) {
        next(err);
    }
}

//=============================

async function updateVenda(req, res, next) {
    try {
        let venda = req.body;
        if (
            !venda.vendaId ||
            !venda.name ||
            !venda.email ||
            !venda.senha ||
            !venda.telefone ||
            !venda.endereco
        ) {
            throw new Error("Todas as informações são obrigatórias !");
        }
        venda = await VendaService.updateVenda(venda);
        res.send(venda);
        logger.info(`PUT / client - ${JSON.stringify(venda)}`);
        //  logger.info("PUT /client");
    } catch (err) {
        next(err);
    }
}

export default {
    createVenda,
    getVenda,
    deleteVenda,
    updateVenda,
};
