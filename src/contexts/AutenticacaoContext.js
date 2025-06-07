import React, { createContext, useState, useContext } from "react";

const AutenticacaoContext = createContext();

export function AutenticacaoProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  function login(email, senha) {
    // Simulação de login (substituir por chamada real depois)
    if (email === "teste@teste.com" && senha === "123456") {
      setUsuario({ nome: "Usuário Teste", email });
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