
import ClienteService from '../services/cliente.service.js'

async function createCliente(req, res, next) {
  try {
    let cliente = req.body;
    if (
      !cliente.nome ||
      !cliente.email ||
      !cliente.senha ||
      !cliente.telefone ||
      !cliente.endereco
    ) {
      throw new Error("Todas as informações são obrigatórias !");
    }
    cliente = await ClienteService.createCliente(cliente);
    res.send(cliente);
    logger.info(`POST / cliente - ${JSON.stringify(cliente)}`);

  } catch (err) {
    next(err);
  }
}


//========================

async function getCliente(req, res, next) {
  try {
    res.send(await ClienteService.getCliente(req.params.id));
    logger.info("GET /client");
  } catch (err) {
    next(err);
  }
}

//======================

async function deleteCliente(req, res, next) {
  try {
    await ClienteService.deleteCliente(req.params.id);
    res.end();
    logger.info("DELETE /client");
  } catch (err) {
    next(err);
  }
}

//=============================

async function updateCliente(req, res, next) {
  try {
    let cliente = req.body;
    if (
      !cliente.clienteId ||
      !cliente.name ||
      !cliente.email ||
      !cliente.senha ||
      !cliente.telefone ||
      !cliente.endereco
    ) {
      throw new Error("Todas as informações são obrigatórias !");
    }
    cliente = await ClienteService.updateCliente(cliente);
    res.send(cliente);
    logger.info(`PUT / client - ${JSON.stringify(cliente)}`);
    logger.info("PUT /client");
  } catch (err) {
    next(err);
  }
}

export default {
  createCliente,
  getCliente,
  deleteCliente,
  updateCliente,
};
