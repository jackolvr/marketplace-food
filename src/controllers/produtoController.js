import * as produtoService from "../services/produtoService";

export async function listarProdutos() {
  return await produtoService.buscarProdutos();
}

export async function criarNovoProduto(produto) {
  return await produtoService.criarProduto(produto);
}

export async function atualizarProdutoExistente(id, produto) {
  return await produtoService.atualizarProduto(id, produto);
}

export async function removerProduto(id) {
  return await produtoService.deletarProduto(id);
}