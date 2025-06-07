import * as usuarioService from "../services/usuarioService";

export async function autenticar(email, senha) {
  return await usuarioService.autenticarUsuario(email, senha);
}