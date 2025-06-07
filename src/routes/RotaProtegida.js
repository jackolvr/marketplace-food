import React from "react";
import { Navigate } from "react-router-dom";
import { useAutenticacao } from "../contexts/AutenticacaoContext";

function RotaProtegida({ children }) {
  const { usuario } = useAutenticacao();

  if (!usuario) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default RotaProtegida;