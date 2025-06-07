import axios from "axios";

const API_URL = "http://localhost:3001/produtos";

export async function buscarProdutos() {
  const response = await axios.get(API_URL);
  return response.data;
}

export async function criarProduto(produto) {
  const response = await axios.post(API_URL, produto);
  return response.data;
}

export async function atualizarProduto(id, produto) {
  const response = await axios.put(`${API_URL}/${id}`, produto);
  return response.data;
}

export async function deletarProduto(id) {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
}