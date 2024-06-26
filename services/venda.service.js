import VendaRepository from '../repositories/venda.repository.js';

async function createVenda(venda) {
    return await VendaRepository.createVenda(venda);
}

async function getVenda(id) {
    return await VendaRepository.getVenda(id);
}

async function deleteVenda(id) {
    await VendaRepository.deleteVenda(id);
}

async function updateVenda(venda) {
    await VendaRepository.updateVenda(venda);
}

export default {
    createVenda,
    getVenda,
    deleteVenda,
    updateVenda
};
