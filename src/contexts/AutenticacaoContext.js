import React, { createContext, useState, useContext } from "react";
import { autenticar } from "../controllers/usuarioController";

const AutenticacaoContext = createContext();

export function AutenticacaoProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  async function login(email, senha) {
    const usuarioAutenticado = await autenticar(email, senha);
    if (usuarioAutenticado) {
      setUsuario(usuarioAutenticado);
      return true;
    }
    return false;
  }

  function logout() {
    setUsuario(null);
  }

  return (
    <AutenticacaoContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AutenticacaoContext.Provider>
  );
}

export function useAutenticacao() {
  return useContext(AutenticacaoContext);
}