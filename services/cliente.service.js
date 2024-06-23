
import ClienteRepository from '../repositories/cliente.repository.js'

async function createCliente(cliente) {
  return await ClienteRepository.createCliente(cliente);
}

async function getCliente(id) {
  return await ClienteRepository.getCliente(id);
}

async function deleteCliente(id) {
  await ClienteRepository.deleteCliente(id);
}


async function updateCliente(cliente) {
  await ClienteRepository.updateCliente(cliente);
}


export default {
  createCliente,
  getCliente,
  deleteCliente,
  updateCliente
};
