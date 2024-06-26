import SaleRepository from "../repositories/sale.repository.js";
import ClientRepository from "../repositories/cliente.repository.js";
import ProductRepository from "../repositories/product.repository.js";

async function createSale(sale) {
  // validação se os relacionamentos existem
  if (!(await ClientRepository.getClient(sale.clientId))) {
    throw new Error("O client_id informado não existe!");
  }

  const product = await ProductRepository.getProduct(sale.productId);

  if (!product) {
    throw new Error("O product_id informado não existe!");
  }

  // consulta ao estoque
  if (product.stock > 0) {
    const newSale = await SaleRepository.insertSale(sale);
    product.stock--;
    await ProductRepository.updateProduct(product);
    return newSale;
  } else {
    throw new Error("O produto não está disponível em estoque!");
  }
}

async function getSales(productId, supplierId) {
  if (productId) {
    return await SaleRepository.getSalesByProductId(productId)
  }

  if (supplierId) {
    return await SaleRepository.getSalesBySupplierId(supplierId)
  }

  return await SaleRepository.getSales();
}

async function getSale(id) {
  return await SaleRepository.getSale(id);
}

async function updateSale(sale) {
  if (!(await ClientRepository.getClient(sale.clientId))) {
    throw new Error("O client_id informado para edição não existe!");
  }
  if (!(await ProductRepository.getProduct(sale.productId))) {
    throw new Error("O product_id informado para edição não existe!");
  }
  await SaleRepository.updateSale(sale);
}

async function deleteSale(id) {
  const sale = await SaleRepository.getSale(id);
  if (sale) {
    const product = await ProductRepository.getProduct(sale.productId);
    await SaleRepository.deleteSale(id);
    product.stock++;
    await ProductRepository.updateProduct(product);
  } else {
    throw new Error("O id do sale informado não existe !");
  }
  await SaleRepository.deleteSale(id);
}

export default {
  createSale,
  getSales,
  getSale,
  updateSale,
  deleteSale,
};
