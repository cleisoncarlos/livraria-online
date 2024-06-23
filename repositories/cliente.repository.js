import Cliente from "../models/cliente.model.js";

async function createCliente(cliente) {
  try {
    Cliente.create(cliente);
  } catch (err) {
    throw err;
  }
}


async function getCliente(id) {
  try {
    return await Cliente.findByPk(id);
  } catch (err) {
    throw err;
  }
}

// async function updateCliente(cliente) {
//   try {
//     await Cliente.update(cliente, {
//       where: {
//         clienteId: cliente.clienteId,
//       }
//     })

//   }
// }

async function deleteCliente(id) {
  try {
    await Cliente.destroy({
      where: { clientId: id },
    });
  } catch (err) {
    throw err;
  }
}


export default {
  createCliente,
  getCliente,
  // updateCliente,
  deleteCliente,
};
