import React from "react";
import { useAutenticacao } from "../contexts/AutenticacaoContext";
import { useNavigate } from "react-router-dom";

function Perfil() {
  const { usuario, logout } = useAutenticacao();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-semibold mb-4">Perfil do Usuário</h2>
      <div className="bg-white p-6 rounded shadow-md w-80 mb-4">
        <p><strong>Nome:</strong> {usuario?.nome}</p>
        <p><strong>Email:</strong> {usuario?.email}</p>
      </div>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
      >
        Sair
      </button>
    </div>
  );
}

export default Perfil;