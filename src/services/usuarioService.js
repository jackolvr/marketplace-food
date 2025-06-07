import axios from "axios";

const API_URL = "http://localhost:3001/usuarios";

export async function autenticarUsuario(email, senha) {
  const response = await axios.get(API_URL, {
    params: { email, senha }
  });
  // Retorna o usuário se encontrado, ou null
  return response.data.length > 0 ? response.data[0] : null;
}